import { constants } from '../constants'
import { Config } from '../interfaces'

export function getDefaultTheme<T extends string | number>(config: Config<T>): T {
	// Catch for Gatsby SSR
	if (typeof window === 'undefined') {
		return config.defaultTheme
	}

	let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? config.defaultThemeDark
		: config.defaultTheme

	if (config.isPersistent !== false) {
		const storageKey = config.storageKey || constants.defaultStorageKey
		const storedTheme = localStorage.getItem(storageKey)

		if (storedTheme) {
			theme = JSON.parse(storedTheme) as T
		}
	}

	if (config.initInterceptor) {
		theme = config.initInterceptor(theme)
	}

	return theme
}

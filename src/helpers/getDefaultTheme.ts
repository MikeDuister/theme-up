import { constants } from '../constants'
import { Config } from '../interfaces'

export function getDefaultTheme<T extends string | number>(config: Config<T>): T {
	// Catch for Gatsby SSR
	if (typeof window === 'undefined') {
		return config.defaultTheme
	}

	const storageKey = config.storageKey || constants.defaultStorageKey
	let theme: T = localStorage.getItem(storageKey) as T

	if (window.matchMedia('(prefers-color-scheme: dark)').matches && !theme) {
		theme = config.defaultThemeDark
	}

	theme = theme || config.defaultTheme
	return theme
}

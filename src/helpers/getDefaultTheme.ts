import { Config } from '../interfaces'

export function getDefaultTheme<T extends string | number>(config: Config<T>): T {
	// Catch for Gatsby SSR
	if (typeof window === 'undefined') {
		return config.defaultTheme
	}

	let userTheme: T = localStorage.getItem('theme-up') as T

	if (window.matchMedia('(prefers-color-scheme: dark)').matches && !userTheme) {
		userTheme = config.defaultThemeDark
	}

	return userTheme || config.defaultTheme
}

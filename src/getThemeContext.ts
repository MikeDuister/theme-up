import { createContext, Context } from 'react'
import { getDefaultTheme } from './helpers'
import { Config, ContextLayout } from './interfaces'

export function getThemeContext<T extends string | number>(config: Config<T>): Context<ContextLayout<T>> {
	return createContext({
		theme: getDefaultTheme<T>(config),
		updateTheme: (theme: T) => {
		}
	})
}

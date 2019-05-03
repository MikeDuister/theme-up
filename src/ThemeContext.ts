import { Context, createContext } from 'react'
import { ContextLayout } from './interfaces'

export type ContextType<T extends string | number> = Context<ContextLayout<T>>

export const ThemeContext: ContextType<any> = createContext({
	theme: undefined,
	updateTheme: (theme: any) => {}
})

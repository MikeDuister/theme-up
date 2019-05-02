import React, { Component, Context } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Config, ContextLayout } from './interfaces'
import { getDefaultTheme, getThemes } from './helpers'

interface Props<T extends string | number> {
	config: Config<T>
	themeContext: Context<ContextLayout<T>>
}

export class GlobalThemeProvider<T extends string | number> extends Component<Props<T>, {theme: T}> {
	public readonly state: { theme: T } = {
		theme: getDefaultTheme<T>(this.props.config)
	}

	public GlobalStyle = createGlobalStyle<{theme: T}>`
		:root {
		  ${(props) => getThemes<T>(this.props.config, props.theme)}
		}
	`

	public render() {
		const {theme} = this.state
		const {children} = this.props

		return (
			<this.props.themeContext.Provider
				value={{
					theme,
					updateTheme: this.changeTheme
				}}
			>
				<this.GlobalStyle theme={theme}/>
				{children}
			</this.props.themeContext.Provider>
		)
	}

	private changeTheme(theme: T) {
		localStorage.setItem('theme-up', JSON.stringify(theme))
		this.setState({theme})
	}
}

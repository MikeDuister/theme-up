import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import { constants } from './constants'
import { Config } from './interfaces'
import { getDefaultTheme, getThemes } from './helpers'
import { ThemeContext } from './'

interface Props<T extends string | number> {
	config: Config<T>
}

interface State<T extends string | number> {
	theme: T
}

export class GlobalThemeProvider<T extends string | number> extends Component<Props<T>, State<T>> {
	public readonly state: { theme: T } = {
		theme: getDefaultTheme<T>(this.props.config)
	}
	public GlobalStyle = createGlobalStyle<{ theme: T }>`
		:root {
		  ${(props) => getThemes<T>(this.props.config, props.theme)}
		}
	`
	public render() {
		const {theme} = this.state
		const {children} = this.props

		return (
			<ThemeContext.Provider
				value={{
					theme,
					updateTheme: this.changeTheme
				}}
			>
				<this.GlobalStyle theme={theme}/>
				{children}
			</ThemeContext.Provider>
		)
	}

	private changeTheme = (theme: T) => {
		const {config} = this.props
		if (config.isPersistent !== false) {
			const storageKey = this.props.config.storageKey || constants.defaultStorageKey
			localStorage.setItem(storageKey, JSON.stringify(theme))
		}
		if (config.onUpdate) {
			config.onUpdate(theme)
		}
		this.setState({theme})
	}
}

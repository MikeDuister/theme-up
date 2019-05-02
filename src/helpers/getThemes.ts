import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Config, Styles } from '../interfaces'
import { getStyles } from './getStyles'

export function getThemes<T extends string | number>(config: Config<T>, theme: T): FlattenSimpleInterpolation {
	let themes = css``

	for (const themeKey of Object.keys(config.themes)) {
		themes = css`
				${themes}
				${theme === themeKey && css`
				  ${getStyles(config.themes[themeKey as T] as Styles)}
				`}
			`
	}

	return themes
}

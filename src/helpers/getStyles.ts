import { css, FlattenSimpleInterpolation } from 'styled-components'
import { Styles } from '../interfaces'

export function getStyles(styles: Styles): FlattenSimpleInterpolation {
	let stylesInterpolation = css``

	for (const styleKey of Object.keys(styles)) {
		stylesInterpolation = css`
				${stylesInterpolation};
				${styleKey.substr(0, 2) === '--' ? styleKey : `--${styleKey}`}: ${styles[styleKey]};
			`
	}

	return stylesInterpolation
}

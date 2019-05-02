import { AdvancedOptions } from './AdvancedOptions'
import { Styles } from './Styles'

export interface Config<T extends string | number> extends AdvancedOptions<T> {
	defaultTheme: T
	defaultThemeDark: T
	themes: { [key in T]?: Styles }
}

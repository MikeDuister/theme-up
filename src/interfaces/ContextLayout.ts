export interface ContextLayout<T extends string | number> {
	theme: T,
	updateTheme: (theme: T) => void
}

export interface AdvancedOptions<T> {
	initInterceptor?: (theme: T) => T
	onUpdate?: (theme: T) => void
	isPersistent?: boolean
	storageKey?: string
}

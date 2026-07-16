import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
import type { LazyKt__LazyKt } from '../kotlin/LazyKt__LazyKt.d.ts'
import type { LazyThreadSafetyMode } from '../kotlin/LazyThreadSafetyMode.d.ts'
export class LazyKt extends LazyKt__LazyKt {
    static lazy<T extends unknown>(lock: Object | null, initializer: () => T): Lazy<T>;
    static lazy<T extends unknown>(mode: LazyThreadSafetyMode, initializer: () => T): Lazy<T>;
    static lazy<T extends unknown>(initializer: () => T): Lazy<T>;
    static lazyOf<T extends unknown>(value: T): Lazy<T>;
}
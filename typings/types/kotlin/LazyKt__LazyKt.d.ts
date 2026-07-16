import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
import type { LazyKt__LazyJVMKt } from '../kotlin/LazyKt__LazyJVMKt.d.ts'
import type { LazyThreadSafetyMode } from '../kotlin/LazyThreadSafetyMode.d.ts'
export class LazyKt__LazyKt extends LazyKt__LazyJVMKt {
    static lazy<T extends unknown>(lock: Object | null, initializer: () => T): Lazy<T>;
    static lazy<T extends unknown>(mode: LazyThreadSafetyMode, initializer: () => T): Lazy<T>;
    static lazy<T extends unknown>(initializer: () => T): Lazy<T>;
    static lazyOf<T extends unknown>(value: T): Lazy<T>;
}
import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
import type { LazyKt__LazyJVMKt } from '../kotlin/LazyKt__LazyJVMKt.d.ts'
import type { LazyThreadSafetyMode } from '../kotlin/LazyThreadSafetyMode.d.ts'
export class LazyKt__LazyKt extends LazyKt__LazyJVMKt {
    static lazy(paramarg0: Object, paramarg1: () => Object | null): Lazy<Object>;
    static lazy(paramarg0: LazyThreadSafetyMode, paramarg1: () => Object | null): Lazy<Object>;
    static lazy(paramarg0: () => Object | null): Lazy<Object>;
    static lazyOf(paramarg0: Object | null): Lazy<Object>;
}
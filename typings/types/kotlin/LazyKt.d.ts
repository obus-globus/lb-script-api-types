import type { Object } from '../java/lang/Object.d.ts'
import type { Lazy } from '../kotlin/Lazy.d.ts'
import type { LazyKt__LazyKt } from '../kotlin/LazyKt__LazyKt.d.ts'
import type { LazyThreadSafetyMode } from '../kotlin/LazyThreadSafetyMode.d.ts'
export class LazyKt extends LazyKt__LazyKt {
    static lazy(paramarg0: Object, paramarg1: () => Object | null): Lazy<Object>;
    static lazy(paramarg0: LazyThreadSafetyMode, paramarg1: () => Object | null): Lazy<Object>;
    static lazy(paramarg0: () => Object | null): Lazy<Object>;
    static lazyOf(paramarg0: Object | null): Lazy<Object>;
}
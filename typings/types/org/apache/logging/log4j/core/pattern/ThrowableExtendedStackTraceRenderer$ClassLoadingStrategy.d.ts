import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ThrowableExtendedStackTraceRenderer$ClassLoadingStrategy extends Object{
    run(loader: ClassLoader, className: string): Class<Object>;
}
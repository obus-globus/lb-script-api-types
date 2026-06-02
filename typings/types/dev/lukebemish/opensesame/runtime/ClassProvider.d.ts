import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ClassProvider extends Object{
    provide(arg0: ClassLoader, arg1: string): Class<Object>;
}
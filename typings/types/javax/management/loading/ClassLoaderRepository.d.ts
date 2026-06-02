import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ClassLoaderRepository extends Object{
    loadClass(arg0: string): Class<Object>;
    loadClassBefore(arg0: ClassLoader, arg1: string): Class<Object>;
    loadClassWithout(arg0: ClassLoader, arg1: string): Class<Object>;
}
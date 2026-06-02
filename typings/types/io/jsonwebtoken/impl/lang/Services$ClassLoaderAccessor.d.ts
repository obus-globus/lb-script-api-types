import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Services$ClassLoaderAccessor extends Object{
    getClassLoader(): ClassLoader;
}
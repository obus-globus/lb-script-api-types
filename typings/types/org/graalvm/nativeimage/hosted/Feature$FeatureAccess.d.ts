import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Feature$FeatureAccess extends Object{
    findClassByName(className: string): Class<Object>;
    getApplicationClassLoader(): ClassLoader;
    getApplicationClassPath(): Path[][];
    getApplicationModulePath(): Path[][];
}
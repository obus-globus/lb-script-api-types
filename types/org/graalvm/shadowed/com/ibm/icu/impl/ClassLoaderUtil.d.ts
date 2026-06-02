import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ClassLoaderUtil extends Object {
    static getClassLoader(): ClassLoader;
    static getClassLoader(paramcls: Class<Object>): ClassLoader;
    constructor()
}
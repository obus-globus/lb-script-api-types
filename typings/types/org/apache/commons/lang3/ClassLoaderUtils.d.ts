import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../java/net/URLClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassLoaderUtils extends Object {
    static getSystemURLs(): URL[];
    static getThreadURLs(): URL[];
    static toString(paramarg0: ClassLoader): string;
    static toString(paramarg0: URLClassLoader): string;
    constructor()
}
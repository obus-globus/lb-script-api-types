import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Loader extends Object {
    static getClassLoader(): ClassLoader;
    static getClassLoader(paramclass1: Class<Object>, paramclass2: Class<Object>): ClassLoader;
    static getResource(paramresource: string, paramdefaultLoader: ClassLoader): URL;
    static getResourceAsStream(paramresource: string, paramdefaultLoader: ClassLoader): InputStream;
    static getThreadContextClassLoader(): ClassLoader;
    static initializeClass(paramclassName: string, paramloader: ClassLoader): Class<Object>;
    static isClassAvailable(paramclassName: string): boolean;
    static isJansiAvailable(): boolean;
    static loadClass(paramclassName: string): Class<Object>;
    static loadClass(paramclassName: string, paramloader: ClassLoader): Class<Object>;
    static loadSystemClass(paramclassName: string): Class<Object>;
    static newCheckedInstanceOf(paramclassName: string, paramclazz: Class<Object>): Object | null;
    static newCheckedInstanceOfProperty(parampropertyName: string, paramclazz: Class<Object>): Object | null;
    static newInstanceOf(paramclassName: string): Object | null;
    private constructor()
}
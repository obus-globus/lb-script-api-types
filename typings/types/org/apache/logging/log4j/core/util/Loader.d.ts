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
    static newCheckedInstanceOf<T extends unknown>(paramclassName: string, paramclazz: Class<T>): T;
    static newCheckedInstanceOfProperty<T extends unknown>(parampropertyName: string, paramclazz: Class<T>): T;
    static newInstanceOf<T extends unknown>(paramclassName: string): T;
    private constructor()
}
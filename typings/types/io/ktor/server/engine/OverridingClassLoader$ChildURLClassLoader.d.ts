import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../java/net/URLClassLoader.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OverridingClassLoader$ChildURLClassLoader extends URLClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static newInstance(paramarg0: URL[]): URLClassLoader;
    static newInstance(paramarg0: URL[], paramarg1: ClassLoader): URLClassLoader;
    constructor(urls: URL[], realParent: ClassLoader)
    // private realParent: ClassLoader;
    findClass(arg0: string, arg1: string): Class<Object>;
    findClass(name: string): Class<Object>;
    findResource(arg0: string, arg1: string): URL;
    findResource(name: string | null): URL | null;
    findResources(name: string | null): Enumeration<URL>;
    getResource(name: string | null): URL | null;
    getResourceAsStream(name: string | null): InputStream | null;
    getResources(name: string | null): Enumeration<URL>;
}
import type { HostAdapterClassLoader } from '../../../../com/oracle/truffle/host/HostAdapterClassLoader.d.ts'
import type { HostClassCache } from '../../../../com/oracle/truffle/host/HostClassCache.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { SecureClassLoader } from '../../../../java/security/SecureClassLoader.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostAdapterClassLoader$GeneratedClassLoader extends SecureClassLoader implements Supplier<Object> {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    private constructor(null_: HostAdapterClassLoader, cache: HostClassCache, parentLoader: ClassLoader, classOverrides: Object)
    // private cache: HostClassCache;
    // private classOverrides: Object;
    findClass(name: string): Class<Object>;
    findClass(arg0: string, arg1: string): Class<Object>;
    get(): Object;
    // private isGeneratedClassName(name: string): boolean;
    loadClass(arg0: string): Class<Object>;
    loadClass(name: string, resolve: boolean): Class<Object>;
    // private loadGeneratedClass(name: string, resolve: boolean): Class<Object>;
}
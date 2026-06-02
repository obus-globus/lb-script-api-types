import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Package } from '../../java/lang/Package.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { URLStreamHandlerFactory } from '../../java/net/URLStreamHandlerFactory.d.ts'
import type { CodeSource } from '../../java/security/CodeSource.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { SecureClassLoader } from '../../java/security/SecureClassLoader.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Manifest } from '../../java/util/jar/Manifest.d.ts'
import type { Resource } from '../../jdk/internal/loader/Resource.d.ts'
import type { URLClassPath } from '../../jdk/internal/loader/URLClassPath.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class URLClassLoader extends SecureClassLoader implements Closeable {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static newInstance(paramarg0: (Object | null)[]): URLClassLoader;
    static newInstance(paramarg0: (Object | null)[], paramarg1: ClassLoader): URLClassLoader;
    constructor(arg0: URL[])
    constructor(arg0: URL[], arg1: ClassLoader)
    constructor(arg0: URL[], arg1: ClassLoader, arg2: URLStreamHandlerFactory)
    constructor(arg0: string, arg1: URL[], arg2: ClassLoader)
    constructor(arg0: string, arg1: URL[], arg2: ClassLoader, arg3: URLStreamHandlerFactory)
    // private closeables: Map<Closeable, void>;
    // private ucp: URLClassPath;
    addURL(arg0: URL): void;
    close(): void;
    // private defineClass(arg0: string, arg1: Resource): Class<Object>;
    definePackage(arg0: string, arg1: Manifest, arg2: URL): Package;
    findClass(arg0: string): Class<Object>;
    findResource(arg0: string): URL;
    findResources(arg0: string): Enumeration<URL>;
    // private getAndVerifyPackage(arg0: string, arg1: Manifest, arg2: URL): Package;
    getPermissions(arg0: CodeSource): PermissionCollection;
    getResourceAsStream(arg0: string): InputStream;
    getURLs(): URL[];
    // private isSealed(arg0: string, arg1: Manifest): boolean;
}
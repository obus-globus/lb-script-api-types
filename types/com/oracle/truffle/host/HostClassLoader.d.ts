import type { TruffleFile } from '../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { HostClassLoader$Loader } from '../../../../com/oracle/truffle/host/HostClassLoader$Loader.d.ts'
import type { HostClassLoader$Resource } from '../../../../com/oracle/truffle/host/HostClassLoader$Resource.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostClassLoader extends ClassLoader implements Closeable {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor(context: HostContext, parent: ClassLoader)
    // private closed: boolean;
    // private hostContext: HostContext;
    // private loaders: HostClassLoader$Loader[];
    // private roots: Map<TruffleFile, boolean>;
    // private toClose: Closeable[];
    addClasspathRoot(file: TruffleFile): void;
    close(): void;
    // private definePackage(className: string): void;
    findClass(className: string): Class<Object>;
    // private findFirstResource(name: string): HostClassLoader$Resource;
    findResource(name: string): URL;
    findResources(name: string): Enumeration<URL>;
    // private getLoaders(): HostClassLoader$Loader[];
    getResourceAsStream(name: string): InputStream;
}
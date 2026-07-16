import type { File } from '../../../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../../../../java/net/URLClassLoader.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
export class ModClassLoader_125_FML extends URLClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static newInstance(paramarg0: URL[]): URLClassLoader;
    static newInstance(paramarg0: URL[], paramarg1: ClassLoader): URLClassLoader;
    constructor()
    // private localUrls: URL[];
    addFile(arg0: File): void;
    addURL(arg0: URL): void;
    findResource(arg0: string): URL;
    findResource(arg0: string, arg1: string): URL;
    findResources(arg0: string): Enumeration<URL>;
    getParentSource(): File;
    getParentSources(): File[];
    getURLs(): URL[];
}
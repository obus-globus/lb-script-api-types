import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GeneratorClassLoaders$StorageClassLoader extends ClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor(null_: GeneratorClassLoaders$StorageClassLoader)
    // private referenceClass: Class<Object>;
    defineGeneratedClass(name: string, b: number[], off: number, len: number): Class<Object>;
}
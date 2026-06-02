import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ClassLoaderUtils extends Object {
    static compileJavaClass(paramarg0: Path[][]): void;
    static findImplementation(paramarg0: Path[][], paramarg1: Class<Object>, paramarg2: string): Object | null;
    static getContextClassLoader(): ClassLoader;
    static getResource(paramarg0: string): URL;
    static getResourceAsStream(paramarg0: string): InputStream;
    static getResources(paramarg0: string): Enumeration<URL>;
    static initClass(paramarg0: ClassLoader, paramarg1: Class<Object>, paramarg2: string): Object | null;
    static nativeLoad(paramarg0: string, paramarg1: string): void;
    private constructor()
}
import type { KnotClassLoader$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../../../java/net/URLClassLoader.d.ts'
import type { Enumeration } from '../../../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KnotClassLoader$DynamicURLClassLoader extends URLClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static newInstance(paramarg0: (Object | null)[]): URLClassLoader;
    static newInstance(paramarg0: (Object | null)[], paramarg1: ClassLoader): URLClassLoader;
    private constructor(arg0: URL[])
    constructor(arg0: URL[], arg1: KnotClassLoader$1)
    addURL(arg0: URL): void;
}
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { SecureClassLoader } from '../../../../../java/security/SecureClassLoader.d.ts'
import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
export abstract class AbstractSecureClassLoader extends SecureClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor(arg0: string, arg1: ClassLoader)
}
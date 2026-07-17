import type { JavaMap } from '../../JavaMap.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../java/net/URL.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { CodeSource } from '../../java/security/CodeSource.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { ProtectionDomain } from '../../java/security/ProtectionDomain.d.ts'
import type { SecureClassLoader$CodeSourceKey } from '../../java/security/SecureClassLoader$CodeSourceKey.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SecureClassLoader extends ClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    constructor()
    constructor(arg0: ClassLoader)
    constructor(arg0: string, arg1: ClassLoader)
    // private pdcache: JavaMap<SecureClassLoader$CodeSourceKey, ProtectionDomain>;
    defineClass(arg0: number[], arg1: number, arg2: number): Class<Object>;
    defineClass(arg0: string, arg1: ByteBuffer, arg2: CodeSource): Class<Object>;
    defineClass(arg0: string, arg1: ByteBuffer, arg2: ProtectionDomain): Class<Object>;
    defineClass(arg0: string, arg1: number[], arg2: number, arg3: number): Class<Object>;
    defineClass(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: CodeSource): Class<Object>;
    defineClass(arg0: string, arg1: number[], arg2: number, arg3: number, arg4: ProtectionDomain): Class<Object>;
    getPermissions(arg0: CodeSource): PermissionCollection;
    // private getProtectionDomain(arg0: CodeSource): ProtectionDomain;
    // private resetArchivedStates(): void;
}
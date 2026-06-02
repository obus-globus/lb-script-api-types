import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { ProtectionDomain } from '../../../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostClassLoader$Resource extends Object {
    constructor(protectionDomain: ProtectionDomain)
    // private protectionDomain: ProtectionDomain;
    getContent(): number[];
    getInputStream(): InputStream;
    getLength(): number;
    getProtectionDomain(): ProtectionDomain;
    getURL(): URL;
}
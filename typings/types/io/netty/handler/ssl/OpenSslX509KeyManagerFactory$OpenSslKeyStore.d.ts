import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { KeyStore } from '../../../../java/security/KeyStore.d.ts'
import type { KeyStore$LoadStoreParameter } from '../../../../java/security/KeyStore$LoadStoreParameter.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
export class OpenSslX509KeyManagerFactory$OpenSslKeyStore extends KeyStore {
    static getDefaultType(): string;
    static getInstance(paramarg0: File, paramarg1: string[]): KeyStore;
    static getInstance(paramarg0: File, paramarg1: KeyStore$LoadStoreParameter): KeyStore;
    static getInstance(paramarg0: string): KeyStore;
    static getInstance(paramarg0: string, paramarg1: string): KeyStore;
    static getInstance(paramarg0: string, paramarg1: JavaMap<any, any>): KeyStore;
    private constructor(arg0: X509Certificate[], arg1: boolean)
}
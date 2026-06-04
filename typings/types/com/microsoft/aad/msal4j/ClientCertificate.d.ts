import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { IClientCertificate } from '../../../../com/microsoft/aad/msal4j/IClientCertificate.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCertificate extends Object implements IClientCertificate {
    static DEFAULT_PKCS12_PASSWORD: string;
    constructor(arg0: PrivateKey, arg1: X509Certificate[])
    // private privateKey: PrivateKey;
    // private publicKeyCertificateChain: X509Certificate[];
    getAssertion(arg0: Authority, arg1: string, arg2: boolean): string;
    getEncodedPublicKeyCertificateChain(): string[];
    privateKey(): PrivateKey;
    publicCertificateHash(): string;
    publicCertificateHash256(): string;
}
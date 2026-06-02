import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClientCertificate extends IClientCredential, Object{
    getEncodedPublicKeyCertificateChain(): string[];
    privateKey(): PrivateKey;
    publicCertificateHash(): string;
    publicCertificateHash256(): string;
}
import type { IClientAssertion } from '../../../../com/microsoft/aad/msal4j/IClientAssertion.d.ts'
import type { IClientCertificate } from '../../../../com/microsoft/aad/msal4j/IClientCertificate.d.ts'
import type { IClientSecret } from '../../../../com/microsoft/aad/msal4j/IClientSecret.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCredentialFactory extends Object {
    static createFromCallback(paramarg0: () => string): IClientAssertion;
    static createFromCertificate(paramarg0: InputStream, paramarg1: string): IClientCertificate;
    static createFromCertificate(paramarg0: PrivateKey, paramarg1: X509Certificate): IClientCertificate;
    static createFromCertificateChain(paramarg0: PrivateKey, paramarg1: X509Certificate[]): IClientCertificate;
    static createFromClientAssertion(paramarg0: string): IClientAssertion;
    static createFromSecret(paramarg0: string): IClientSecret;
    constructor()
}
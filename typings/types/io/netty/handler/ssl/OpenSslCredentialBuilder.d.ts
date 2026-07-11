import type { OpenSslCredential } from '../../../../io/netty/handler/ssl/OpenSslCredential.d.ts'
import type { OpenSslPrivateKey } from '../../../../io/netty/handler/ssl/OpenSslPrivateKey.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslCredentialBuilder extends Object {
    static forX509(paramarg0: PrivateKey, ...paramarg1: (Object | null)[]): OpenSslCredentialBuilder;
    private constructor(arg0: OpenSslPrivateKey, arg1: X509Certificate[])
    private constructor(arg0: PrivateKey, arg1: X509Certificate[])
    // private certificateChain: X509Certificate[];
    // private mustMatchIssuer: boolean;
    // private openSslPrivateKey: OpenSslPrivateKey;
    // private privateKey: PrivateKey;
    // private trustAnchorId: number[];
    build(): OpenSslCredential;
    // private createCertChainPointer(): number;
    // private createCredential(): number;
    // private getPrivateKeyPointer(): number;
    mustMatchIssuer(arg0: boolean): OpenSslCredentialBuilder;
    trustAnchorId(arg0: number[]): OpenSslCredentialBuilder;
}
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslPrivateKey$OpenSslPrivateKeyMaterial extends AbstractReferenceCounted implements OpenSslKeyMaterial {
    constructor(null_: OpenSslPrivateKey$OpenSslPrivateKeyMaterial, arg1: number, arg2: X509Certificate[])
    // private certificateChain: number;
    // private x509CertificateChain: X509Certificate[];
    certificateChain(): X509Certificate[];
    certificateChainAddress(): number;
    deallocate(): void;
    privateKeyAddress(): number;
    // private releaseChain(): void;
    retain(): OpenSslKeyMaterial;
    retain(arg0: number): OpenSslKeyMaterial;
    touch(): OpenSslKeyMaterial;
    touch(arg0: Object): OpenSslKeyMaterial;
}
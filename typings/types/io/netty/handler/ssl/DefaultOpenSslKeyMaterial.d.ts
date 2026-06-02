import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { AbstractReferenceCounted } from '../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { ResourceLeakTracker } from '../../../../io/netty/util/ResourceLeakTracker.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultOpenSslKeyMaterial extends AbstractReferenceCounted implements OpenSslKeyMaterial {
    constructor(arg0: number, arg1: number, arg2: X509Certificate[])
    // private chain: number;
    // private leak: ResourceLeakTracker<DefaultOpenSslKeyMaterial>;
    // private privateKey: number;
    // private x509CertificateChain: X509Certificate[];
    certificateChain(): X509Certificate[];
    certificateChainAddress(): number;
    deallocate(): void;
    privateKeyAddress(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): DefaultOpenSslKeyMaterial;
    retain(arg0: number): DefaultOpenSslKeyMaterial;
    touch(): DefaultOpenSslKeyMaterial;
    touch(arg0: Object): DefaultOpenSslKeyMaterial;
}
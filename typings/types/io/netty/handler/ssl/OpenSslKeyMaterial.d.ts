import type { ReferenceCounted } from '../../../../io/netty/util/ReferenceCounted.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpenSslKeyMaterial extends ReferenceCounted, Object{
    certificateChain(): X509Certificate[];
    certificateChainAddress(): number;
    privateKeyAddress(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): OpenSslKeyMaterial;
    retain(arg0: number): OpenSslKeyMaterial;
    touch(): OpenSslKeyMaterial;
    touch(arg0: Object): OpenSslKeyMaterial;
}
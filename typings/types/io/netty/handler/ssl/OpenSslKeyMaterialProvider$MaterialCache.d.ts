import type { OpenSslKeyMaterialProvider$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslKeyMaterialProvider$MaterialCache extends Object {
    private constructor(arg0: PrivateKey, arg1: X509Certificate[], arg2: OpenSslKeyMaterial)
    constructor(arg0: PrivateKey, arg1: X509Certificate[], arg2: OpenSslKeyMaterial, arg3: OpenSslKeyMaterialProvider$1)
    // private certs: X509Certificate[];
    // private key: PrivateKey;
    // private material: OpenSslKeyMaterial;
    material(): OpenSslKeyMaterial;
    release(): void;
    retain(): boolean;
    sameInstances(arg0: PrivateKey, arg1: X509Certificate[]): boolean;
}
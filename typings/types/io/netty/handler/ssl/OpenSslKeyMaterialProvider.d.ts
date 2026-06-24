import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { OpenSslKeyMaterialProvider$MaterialCache } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider$MaterialCache.d.ts'
import type { PrivateKey } from '../../../../java/security/PrivateKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { X509KeyManager } from '../../../../javax/net/ssl/X509KeyManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslKeyMaterialProvider extends Object {
    constructor(arg0: X509KeyManager, arg1: string)
    // private cache: AtomicReference<OpenSslKeyMaterialProvider$MaterialCache>;
    // private keyManager: X509KeyManager;
    // private password: string;
    chooseKeyMaterial(arg0: ByteBufAllocator, arg1: string): OpenSslKeyMaterial;
    // private createKeyMaterial(arg0: ByteBufAllocator, arg1: X509Certificate[], arg2: PrivateKey): OpenSslKeyMaterial;
    destroy(): void;
    // private destroyCache(): void;
    keyManager(): X509KeyManager;
}
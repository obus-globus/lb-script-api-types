import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { X509KeyManager } from '../../../../javax/net/ssl/X509KeyManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenSslKeyMaterialProvider extends Object {
    constructor(arg0: X509KeyManager, arg1: string)
    // private keyManager: X509KeyManager;
    // private password: string;
    chooseKeyMaterial(arg0: ByteBufAllocator, arg1: string): OpenSslKeyMaterial;
    destroy(): void;
    keyManager(): X509KeyManager;
}
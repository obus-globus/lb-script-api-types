import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { OpenSslKeyMaterial } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterial.d.ts'
import type { OpenSslKeyMaterialProvider } from '../../../../io/netty/handler/ssl/OpenSslKeyMaterialProvider.d.ts'
import type { X509KeyManager } from '../../../../javax/net/ssl/X509KeyManager.d.ts'
export class OpenSslCachingKeyMaterialProvider extends OpenSslKeyMaterialProvider {
    constructor(arg0: X509KeyManager, arg1: string, arg2: number)
    // private cache: { [key: string]: OpenSslKeyMaterial };
    // private full: boolean;
    // private maxCachedEntries: number;
    chooseKeyMaterial(arg0: ByteBufAllocator, arg1: string): OpenSslKeyMaterial;
    destroy(): void;
}
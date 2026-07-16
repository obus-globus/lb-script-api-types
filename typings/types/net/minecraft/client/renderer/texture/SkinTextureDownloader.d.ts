import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { ClientAsset$Texture } from '../../../../../net/minecraft/core/ClientAsset$Texture.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class SkinTextureDownloader extends Object {
    constructor(proxy: Proxy, textureManager: TextureManager, mainThreadExecutor: Executor)
    // private mainThreadExecutor: Executor;
    // private proxy: Proxy;
    // private textureManager: TextureManager;
    downloadAndRegisterSkin(textureId: Identifier, localCopy: Path, url: string, processLegacySkin: boolean): CompletableFuture<ClientAsset$Texture>;
    // private downloadSkin(localCopy: Path, url: string): NativeImage;
    // private registerTextureInManager(textureId: ClientAsset$Texture, contents: NativeImage): CompletableFuture<ClientAsset$Texture>;
}
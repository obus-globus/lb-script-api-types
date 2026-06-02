import type { MinecraftProfileTexture } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTexture.d.ts'
import type { MinecraftProfileTexture$Type } from '../../../../com/mojang/authlib/minecraft/MinecraftProfileTexture$Type.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientAsset$Texture } from '../../../../net/minecraft/core/ClientAsset$Texture.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SkinManager$TextureCache extends Object {
    private constructor(null_: SkinManager$TextureCache, root: Path[], type: MinecraftProfileTexture$Type)
    // private root: Path[];
    // private textures: { [key: string]: CompletableFuture<ClientAsset$Texture> };
    // private type: MinecraftProfileTexture$Type;
    getOrLoad(texture: MinecraftProfileTexture): CompletableFuture<ClientAsset$Texture>;
    // private getTextureLocation(textureHash: string): Identifier;
    // private registerTexture(textureInfo: MinecraftProfileTexture): CompletableFuture<ClientAsset$Texture>;
}
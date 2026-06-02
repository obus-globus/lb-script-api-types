import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { ReloadableTexture } from '../../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class CubeMapTexture extends ReloadableTexture {
    constructor(resourceId: Identifier)
    doLoad(image: NativeImage): void;
    loadContents(resourceManager: ResourceManager): TextureContents;
}
import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { ReloadableTextureAccessor } from '../../../../../net/irisshaders/iris/mixin/texture/ReloadableTextureAccessor.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export abstract class ReloadableTexture extends AbstractTexture implements ReloadableTextureAccessor {
    constructor(resourceId: Identifier)
    // private resourceId: Identifier;
    apply(contents: TextureContents): void;
    doLoad(image: NativeImage): void;
    loadContents(resourceManager: ResourceManager): TextureContents;
    resourceId(): Identifier;
}
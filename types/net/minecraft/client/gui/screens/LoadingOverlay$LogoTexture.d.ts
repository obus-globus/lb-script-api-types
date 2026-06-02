import type { ReloadableTexture } from '../../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { TextureContents } from '../../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class LoadingOverlay$LogoTexture extends ReloadableTexture {
    constructor()
    loadContents(resourceManager: ResourceManager): TextureContents;
}
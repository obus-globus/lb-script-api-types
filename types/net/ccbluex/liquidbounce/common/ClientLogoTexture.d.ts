import type { ReloadableTexture } from '../../../../net/minecraft/client/renderer/texture/ReloadableTexture.d.ts'
import type { TextureContents } from '../../../../net/minecraft/client/renderer/texture/TextureContents.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class ClientLogoTexture extends ReloadableTexture {
    static CLIENT_LOGO: Identifier;
    static HEIGHT: number;
    static WIDTH: number;
    constructor()
    loadContents(arg0: ResourceManager): TextureContents;
}
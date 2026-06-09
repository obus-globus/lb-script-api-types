import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { SpriteResourceLoader } from '../../../../../../net/minecraft/client/renderer/texture/atlas/SpriteResourceLoader.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export interface SpriteSource$Loader extends Object {
    get(loader: (param0: Identifier, param1: Resource) => net.minecraft.client.renderer.texture.SpriteContents): SpriteContents;
}
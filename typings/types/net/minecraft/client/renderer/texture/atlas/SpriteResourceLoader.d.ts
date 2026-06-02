import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpriteContents } from '../../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../../../net/minecraft/server/packs/resources/Resource.d.ts'
export interface SpriteResourceLoader extends Object{
    loadSprite(spriteLocation: Identifier, resource: Resource): SpriteContents;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpriteSet } from '../../../../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { TextureAtlas } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export interface FabricSpriteSet extends Object, SpriteSet{
    getAtlas(): TextureAtlas;
    getSprites(): TextureAtlasSprite[];
}
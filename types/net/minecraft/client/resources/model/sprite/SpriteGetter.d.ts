import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { SpriteId } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
export interface SpriteGetter extends Object{
    get(id: SpriteId): TextureAtlasSprite;
}
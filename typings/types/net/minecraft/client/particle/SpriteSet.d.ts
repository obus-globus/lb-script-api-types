import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface SpriteSet extends Object{
    first(): TextureAtlasSprite;
    get(index: number, max: number): TextureAtlasSprite;
    get(random: RandomSource): TextureAtlasSprite;
}
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class ParticleResources$MutableSpriteSet extends Object implements SpriteSet {
    constructor()
    sprites: TextureAtlasSprite[];
    first(): TextureAtlasSprite;
    get(index: number, max: number): TextureAtlasSprite;
    get(random: RandomSource): TextureAtlasSprite;
    rebind(ids: TextureAtlasSprite[]): void;
}
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricSpriteSet } from '../../../../../../net/fabricmc/fabric/api/client/particle/v1/FabricSpriteSet.d.ts'
import type { ParticleResources$MutableSpriteSet } from '../../../../../../net/minecraft/client/particle/ParticleResources$MutableSpriteSet.d.ts'
import type { TextureAtlas } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class FabricSpriteSetImpl extends Record implements FabricSpriteSet {
    constructor(delegate: ParticleResources$MutableSpriteSet)
    // private delegate: ParticleResources$MutableSpriteSet;
    delegate(): ParticleResources$MutableSpriteSet;
    equals(arg0: Object | null): boolean;
    first(): TextureAtlasSprite;
    get(arg0: number, arg1: number): TextureAtlasSprite;
    get(arg0: RandomSource): TextureAtlasSprite;
    getAtlas(): TextureAtlas;
    getSprites(): TextureAtlasSprite[];
    hashCode(): number;
    toString(): string;
}
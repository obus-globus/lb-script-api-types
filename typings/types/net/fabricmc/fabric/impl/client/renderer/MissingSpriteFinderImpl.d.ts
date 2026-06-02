import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { SpriteFinder } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class MissingSpriteFinderImpl extends Record implements SpriteFinder {
    constructor(missingSprite: TextureAtlasSprite)
    // private missingSprite: TextureAtlasSprite;
    equals(arg0: Object | null): boolean;
    find(arg0: number, arg1: number): TextureAtlasSprite;
    find(arg0: QuadView): TextureAtlasSprite;
    hashCode(): number;
    missingSprite(): TextureAtlasSprite;
    toString(): string;
}
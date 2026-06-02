import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelQuadView } from '../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
import type { SodiumQuadAtlas } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/SodiumQuadAtlas.d.ts'
import type { SodiumSpriteFinder } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinder.d.ts'
import type { SodiumSpriteFinderImpl$Node } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/texture/SodiumSpriteFinderImpl$Node.d.ts'
import type { TextureAtlasSprite } from '../../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SodiumSpriteFinderImpl extends Object implements SodiumSpriteFinder {
    constructor(arg0: Map<Identifier, TextureAtlasSprite>, arg1: TextureAtlasSprite, arg2: SodiumQuadAtlas)
    readonly atlas: SodiumQuadAtlas;
    // private badSpriteCount: number;
    // private missingSprite: TextureAtlasSprite;
    // private root: SodiumSpriteFinderImpl$Node;
    find(arg0: number, arg1: number): TextureAtlasSprite;
    find(arg0: ModelQuadView): TextureAtlasSprite;
    getAtlas(): SodiumQuadAtlas;
}
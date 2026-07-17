import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { QuadView } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadView.d.ts'
import type { SpriteFinder } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/sprite/SpriteFinder.d.ts'
import type { SpriteFinderImpl$Node } from '../../../../../../net/fabricmc/fabric/impl/client/renderer/SpriteFinderImpl$Node.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteFinderImpl extends Object implements SpriteFinder {
    constructor(arg0: JavaMap<Identifier, TextureAtlasSprite>, arg1: TextureAtlasSprite)
    // private badSpriteCount: number;
    // private missingSprite: TextureAtlasSprite;
    // private root: SpriteFinderImpl$Node;
    find(arg0: number, arg1: number): TextureAtlasSprite;
    find(arg0: QuadView): TextureAtlasSprite;
}
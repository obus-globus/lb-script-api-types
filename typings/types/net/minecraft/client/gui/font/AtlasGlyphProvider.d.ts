import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlyphSource } from '../../../../../net/minecraft/client/gui/GlyphSource.d.ts'
import type { GlyphRenderTypes } from '../../../../../net/minecraft/client/gui/font/GlyphRenderTypes.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class AtlasGlyphProvider extends Object {
    constructor(atlas: TextureAtlas)
    // private atlas: TextureAtlas;
    // private missingWrapper: GlyphSource;
    // private renderTypes: GlyphRenderTypes;
    // private spriteResolver: (param0: Identifier) => GlyphSource;
    // private wrapperCache: JavaMap<Identifier, GlyphSource>;
    // private createSprite(sprite: TextureAtlasSprite): GlyphSource;
    sourceForSprite(spriteId: Identifier): GlyphSource;
}
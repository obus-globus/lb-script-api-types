import type { GlyphBitmap } from '../../../../../com/mojang/blaze3d/font/GlyphBitmap.d.ts'
import type { GlyphInfo } from '../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { FontTexture$Node } from '../../../../../net/minecraft/client/gui/font/FontTexture$Node.d.ts'
import type { GlyphRenderTypes } from '../../../../../net/minecraft/client/gui/font/GlyphRenderTypes.d.ts'
import type { BakedSheetGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { Dumpable } from '../../../../../net/minecraft/client/renderer/texture/Dumpable.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FontTexture extends AbstractTexture implements Dumpable {
    constructor(label: () => string, renderTypes: GlyphRenderTypes, colored: boolean)
    // private colored: boolean;
    // private immediatelyFast$fontAtlasSize: number;
    // private immediatelyFast$shouldResizeFontAtlas: boolean;
    // private renderTypes: GlyphRenderTypes;
    // private root: FontTexture$Node;
    add(info: GlyphInfo, glyph: GlyphBitmap): BakedSheetGlyph;
    dumpContents(selfId: Identifier, dir: Path): void;
}
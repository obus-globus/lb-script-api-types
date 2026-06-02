import type { GlyphBitmap } from '../../../../../com/mojang/blaze3d/font/GlyphBitmap.d.ts'
import type { GlyphInfo } from '../../../../../com/mojang/blaze3d/font/GlyphInfo.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FontTexture } from '../../../../../net/minecraft/client/gui/font/FontTexture.d.ts'
import type { BakedSheetGlyph } from '../../../../../net/minecraft/client/gui/font/glyphs/BakedSheetGlyph.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlyphStitcher extends Object implements AutoCloseable {
    constructor(textureManager: TextureManager, texturePrefix: Identifier)
    // private textureManager: TextureManager;
    texturePrefix: Identifier;
    // private textures: FontTexture[];
    close(): void;
    reset(): void;
    stitch(info: GlyphInfo, glyphBitmap: GlyphBitmap): BakedSheetGlyph;
    // private textureName(index: number): Identifier;
}
import type { Dimension } from '../../../../../../java/awt/Dimension.d.ts'
import type { Graphics2D } from '../../../../../../java/awt/Graphics2D.d.ts'
import type { FontRenderContext } from '../../../../../../java/awt/font/FontRenderContext.d.ts'
import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { FontGlyph } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphPage$Companion$CharacterGenerationInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion$CharacterGenerationInfo.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
export class GlyphPage$Companion extends Object {
    // private DEFAULT_PADDING: number;
    // private fontRendererContext: FontRenderContext;
    // private /*not mapped: */ getFontRendererContext(): FontRenderContext;
    // private maxTextureSize: Lazy<number>;
    // private /*not mapped: */ getMaxTextureSize(): Lazy<number>;
    protected createBufferedImageWithDimensions(atlasDimensions: Dimension): BufferedImage;
    protected createCharacterCreationInfo(it: FontGlyph): GlyphPage$Companion$CharacterGenerationInfo | null;
    protected createGlyphFromGenerationInfo(it: GlyphPage$Companion$CharacterGenerationInfo, atlasDimensions: Dimension): GlyphRenderInfo;
    /**
     * Initializes the static values for glyph pages. Has to be called from a thread with an OpenGL context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L129 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:129}
     */
    init(): void;
    // private renderGlyphOnAtlas(characterInfo: GlyphPage$Companion$CharacterGenerationInfo, atlasGraphics: Graphics2D): void;
    protected renderGlyphs(atlas: BufferedImage, glyphsToRender: GlyphPage$Companion$CharacterGenerationInfo[]): void;
}
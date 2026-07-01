import type { NativeImage } from '../../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { Dimension } from '../../../../../../../java/awt/Dimension.d.ts'
import type { Point } from '../../../../../../../java/awt/Point.d.ts'
import type { BufferedImage } from '../../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { AtlasSliceHandle } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/AtlasSliceHandle.d.ts'
import type { DynamicAtlasAllocator } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.d.ts'
import type { FontGlyph } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphIdentifier } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { GlyphPage } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphPage$Companion } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
import type { GlyphPage$Companion$CharacterGenerationInfo } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion$CharacterGenerationInfo.d.ts'
import type { GlyphRenderInfo } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { DynamicGlyphPage$Companion } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage$Companion.d.ts'
import type { DynamicTexture } from '../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class DynamicGlyphPage extends GlyphPage {
    static Companion: GlyphPage$Companion;
    static Companion: DynamicGlyphPage$Companion;
    static DEFAULT_ATLAS_SIZE: Dimension;
    constructor(atlasSize: Dimension, fontHeight: number)
    // private allocator: DynamicAtlasAllocator;
    readonly atlasSize: Dimension;
    readonly dirty: GlyphRenderInfo[];
    // private glyphMap: { [key: string]: any };
    // private image: BufferedImage;
    readonly texture: DynamicTexture;
    // private copyImageSection(fromImage: BufferedImage, toImage: NativeImage, fromLocation: Point, toLocation: Point, patchSize: Dimension): void;
    free(ch: string, style: number): GlyphRenderInfo | null;
    getGlyph(char: string, style: number): GlyphRenderInfo | null;
    /**
     * Clears the allocator and uses optimized characters with optimized allocation order to reduce the amount of
     * fragmentation.
     *
     * @returns Removed chars
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt:113}
     */
    optimizeAtlas(): Pair<GlyphIdentifier, GlyphRenderInfo>[];
    // private planCharacterPlacement(glyph: FontGlyph): Pair<GlyphPage$Companion$CharacterGenerationInfo, AtlasSliceHandle> | null;
    /**
     * Tries to add the given characters to the page.
     *
     * @returns A list of characters that could not be added
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt:61}
     */
    tryAdd(c: FontGlyph[]): FontGlyph[];
    // private updateNativeTexture(generationInfo: GlyphPage$Companion$CharacterGenerationInfo, glyph: GlyphRenderInfo): void;
}
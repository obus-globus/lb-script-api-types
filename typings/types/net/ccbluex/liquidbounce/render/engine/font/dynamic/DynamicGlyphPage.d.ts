import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Dimension } from '../../../../../../../java/awt/Dimension.d.ts'
import type { BufferedImage } from '../../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { AtlasSliceHandle } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/AtlasSliceHandle.d.ts'
import type { DynamicAtlasAllocator } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/DynamicAtlasAllocator.d.ts'
import type { FontGlyph } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphIdentifier } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { GlyphPage } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage.d.ts'
import type { GlyphPage$Companion$CharacterGenerationInfo } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion$CharacterGenerationInfo.d.ts'
import type { GlyphRenderInfo } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { DynamicGlyphPage$Companion } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage$Companion.d.ts'
export class DynamicGlyphPage extends GlyphPage {
    static Companion: DynamicGlyphPage$Companion;
    static fontRasterizationLock: Object;
    constructor(atlasSize: Dimension, fontHeight: number)
    // private allocator: DynamicAtlasAllocator;
    readonly atlasSize: Dimension;
    // private copyScratchBuffer: number[];
    // private glyphMap: JavaMap<GlyphIdentifier, Pair<GlyphRenderInfo, AtlasSliceHandle>>;
    // private image: BufferedImage;
    readonly texture: GlyphAtlasTexture;
    free(glyphIdentifier: GlyphIdentifier): GlyphRenderInfo | null;
    getGlyph(fontGlyph: FontGlyph): GlyphRenderInfo | null;
    /**
     * Clears the allocator and uses optimized characters with optimized allocation order to reduce the amount of
     * fragmentation.
     *
     * @returns Removed chars
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt:115}
     */
    optimizeAtlas(): Pair<GlyphIdentifier, GlyphRenderInfo>[];
    /**
     * Tries to add the given characters to the page.
     *
     * @returns A list of characters that could not be added
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.kt:62}
     */
    tryAdd(c: FontGlyph[]): FontGlyph[];
    // private updateNativeTexture(generationInfo: GlyphPage$Companion$CharacterGenerationInfo): void;
}
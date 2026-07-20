import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasLocation } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasLocation.d.ts'
import type { GlyphLayoutInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphLayoutInfo.d.ts'
import type { BoundingBox2f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
/**
 * Contains information about the placement of characters in a bitmap
 * and how they are rendered
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:44}
 */
export class GlyphRenderInfo extends Record {
    constructor(codepoint: number, atlasLocation: GlyphAtlasLocation | null, glyphBounds: BoundingBox2f, layoutInfo: GlyphLayoutInfo)
    // private atlasLocation: GlyphAtlasLocation | null;
    /**
     * The location of the Glyph on the sprite, may be null if the glyph is a whitespace
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:53}
     */
    /*not mapped: */ atlasLocation(): GlyphAtlasLocation | null;
    // private codepoint: number;
    /**
     * Which Unicode codepoint does this glyph represent?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:49}
     */
    /*not mapped: */ codepoint(): number;
    // private glyphBounds: BoundingBox2f;
    /**
     * The bounds of the rendered glyph. Used for rendering.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:57}
     */
    /*not mapped: */ glyphBounds(): BoundingBox2f;
    // private layoutInfo: GlyphLayoutInfo;
    /*not mapped: */ layoutInfo(): GlyphLayoutInfo;
    component1(): number;
    component2(): GlyphAtlasLocation | null;
    component3(): BoundingBox2f;
    component4(): GlyphLayoutInfo;
    copy(codepoint: number, atlasLocation: GlyphAtlasLocation | null, glyphBounds: BoundingBox2f, layoutInfo: GlyphLayoutInfo): GlyphRenderInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
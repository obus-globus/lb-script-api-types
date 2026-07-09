import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasLocation } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasLocation.d.ts'
import type { GlyphLayoutInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphLayoutInfo.d.ts'
import type { BoundingBox2f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
/**
 * Contains information about the placement of characters in a bitmap
 * and how they are rendered
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:44}
 */
export class GlyphRenderInfo extends Record {
    constructor(char: string, atlasLocation: GlyphAtlasLocation | null, glyphBounds: BoundingBox2f, layoutInfo: GlyphLayoutInfo)
    // private atlasLocation: GlyphAtlasLocation | null;
    /**
     * The location of the Glyph on the sprite, may be null if the glyph is a whitespace
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:53}
     */
    /*not mapped: */ atlasLocation(): GlyphAtlasLocation | null;
    // private char: string;
    /**
     * Which char does this glyph represent?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:49}
     */
    /*not mapped: */ char(): string;
    // private glyphBounds: BoundingBox2f;
    /**
     * The bounds of the rendered glyph. Used for rendering.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:57}
     */
    /*not mapped: */ glyphBounds(): BoundingBox2f;
    // private layoutInfo: GlyphLayoutInfo;
    /*not mapped: */ layoutInfo(): GlyphLayoutInfo;
    component1(): string;
    component2(): GlyphAtlasLocation | null;
    component3(): BoundingBox2f;
    component4(): GlyphLayoutInfo;
    copy(char: string, atlasLocation: GlyphAtlasLocation | null, glyphBounds: BoundingBox2f, layoutInfo: GlyphLayoutInfo): GlyphRenderInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
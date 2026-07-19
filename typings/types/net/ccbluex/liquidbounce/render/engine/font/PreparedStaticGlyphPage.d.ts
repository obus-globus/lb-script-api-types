import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphRenderInfo } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphRenderInfo.d.ts'
import type { StaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.d.ts'
export class PreparedStaticGlyphPage extends Object {
    constructor(atlas: BufferedImage, glyphs: Pair<FontId, GlyphRenderInfo>[])
    // private atlas: BufferedImage;
    // private glyphs: Pair<FontId, GlyphRenderInfo>[];
    materialize(): StaticGlyphPage;
}
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    /**
     * Java2D's native font scaler is shared by static and dynamic atlas generation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:105}
     */
    static fontRasterizationLock: Object;
    constructor()
    readonly texture: GlyphAtlasTexture;
}
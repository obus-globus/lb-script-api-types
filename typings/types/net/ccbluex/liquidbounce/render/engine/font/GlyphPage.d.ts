import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    /**
     * Java2D's native font scaler is shared by static and dynamic atlas generation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/22738df37d7103789b42b7477782868b55185597/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:105}
     */
    static fontRasterizationLock: Object;
    constructor()
    readonly texture: GlyphAtlasTexture;
}
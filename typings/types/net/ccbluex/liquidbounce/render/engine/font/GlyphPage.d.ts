import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    /**
     * Java2D's native font scaler is shared by static and dynamic atlas generation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:106}
     */
    static fontRasterizationLock: Object;
    constructor()
    readonly texture: GlyphAtlasTexture;
}
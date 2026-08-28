import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    /**
     * Java2D's native font scaler is shared by static and dynamic atlas generation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:106}
     */
    static fontRasterizationLock: Object;
    constructor()
    readonly texture: GlyphAtlasTexture;
}
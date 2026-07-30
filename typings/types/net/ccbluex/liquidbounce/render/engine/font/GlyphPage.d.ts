import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphAtlasTexture } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphAtlasTexture.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    /**
     * Java2D's native font scaler is shared by static and dynamic atlas generation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/GlyphPage.kt:105}
     */
    static fontRasterizationLock: Object;
    constructor()
    readonly texture: GlyphAtlasTexture;
}
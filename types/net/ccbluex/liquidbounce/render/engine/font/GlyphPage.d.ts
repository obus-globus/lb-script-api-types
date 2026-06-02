import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GlyphPage$Companion } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphPage$Companion.d.ts'
import type { DynamicTexture } from '../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export abstract class GlyphPage extends Object {
    static Companion: GlyphPage$Companion;
    constructor()
    readonly texture: DynamicTexture;
}
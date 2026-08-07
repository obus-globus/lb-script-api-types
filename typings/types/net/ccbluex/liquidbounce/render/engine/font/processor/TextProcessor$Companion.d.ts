import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../../../kotlin/random/Random.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class TextProcessor$Companion extends Object {
    RANDOM_CHARS: number[];
    readonly hexColors: Color4b[];
    /**
     * @param obfuscationRng The random for the obfuscation.      If null, obfuscated characters will be replaced with `_`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt:41}
     */
    protected generateObfuscatedChar(obfuscationRng: Random | null): number;
}
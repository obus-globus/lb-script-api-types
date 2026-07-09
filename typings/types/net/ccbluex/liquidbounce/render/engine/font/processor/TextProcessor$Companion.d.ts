import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../../../kotlin/random/Random.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class TextProcessor$Companion extends Object {
    RANDOM_CHARS: string[];
    readonly hexColors: Color4b[];
    /**
     * @param obfuscationRng The random for the obfuscation.      If null, obfuscated characters will be replaced with `_`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt:41}
     */
    protected generateObfuscatedChar(obfuscationRng: Random | null): string;
}
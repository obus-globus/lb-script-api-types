import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../../../kotlin/random/Random.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class TextProcessor$Companion extends Object {
    RANDOM_CHARS: string[];
    readonly hexColors: Color4b[];
    /**
     * @param obfuscationRng The random for the obfuscation.      If null, obfuscated characters will be replaced with `_`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt:37}
     */
    protected generateObfuscatedChar(obfuscationRng: Random | null): string;
}
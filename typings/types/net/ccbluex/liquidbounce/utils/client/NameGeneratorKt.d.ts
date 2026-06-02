import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../kotlin/random/Random.d.ts'
export class NameGeneratorKt extends Object {
    static leetRandomly(paramarg0: Random, paramarg1: string, paramarg2: number): string;
    /**
     * Generates 16 char long names in this format:
     * (x = random separator character (0-9_))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt:47}
     */
    static randomUsername(paramarg0: number, paramarg1: Random): string;
}
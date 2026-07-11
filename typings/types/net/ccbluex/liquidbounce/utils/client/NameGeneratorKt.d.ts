import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../kotlin/random/Random.d.ts'
export class NameGeneratorKt extends Object {
    static leetRandomly(rng: Random, str: string, leetReplacements: number): string;
    /**
     * Generates 16 char long names in this format:
     * (x = random separator character (0-9_))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt:51}
     */
    static randomUsername(maxLength: number, rng: Random): string;
}
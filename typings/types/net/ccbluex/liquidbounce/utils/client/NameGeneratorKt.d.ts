import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../kotlin/random/Random.d.ts'
export class NameGeneratorKt extends Object {
    static leetRandomly(rng: Random, str: string, leetReplacements: number): string;
    /**
     * Generates 16 char long names in this format:
     * (x = random separator character (0-9_))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/NameGenerator.kt:51}
     */
    static randomUsername(maxLength: number, rng: Random): string;
}
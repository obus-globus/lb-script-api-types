import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HumanInputDeserializer$StringDeserializer<T extends unknown> extends Object{
    /**
     * Tries to parse the input.
     *
     * @throws IllegalArgumentException if the input is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt:111}
     */
    deserializeThrowing(str: string): T;
}
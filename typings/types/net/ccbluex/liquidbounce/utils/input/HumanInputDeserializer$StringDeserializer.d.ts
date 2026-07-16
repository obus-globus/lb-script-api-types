import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HumanInputDeserializer$StringDeserializer<T extends unknown> extends Object{
    /**
     * Tries to parse the input.
     *
     * @throws IllegalArgumentException if the input is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt:111}
     */
    deserializeThrowing(str: string): T;
}
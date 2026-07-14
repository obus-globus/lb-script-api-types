import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HumanInputDeserializer$StringDeserializer<T extends unknown> extends Object{
    /**
     * Tries to parse the input.
     *
     * @throws IllegalArgumentException if the input is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt:111}
     */
    deserializeThrowing(str: string): T;
}
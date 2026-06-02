import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HumanInputDeserializer$StringDeserializer<T extends Object | number | string | boolean> extends Object{
    /**
     * Tries to parse the input.
     *
     * @throws IllegalArgumentException if the input is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt:106}
     */
    deserializeThrowing(str: string): T;
}
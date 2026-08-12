import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HumanInputDeserializer$StringDeserializer<T extends unknown> extends Object{
    /**
     * Tries to parse the input.
     *
     * @throws IllegalArgumentException if the input is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer.kt:111}
     */
    deserializeThrowing(str: string): T;
}
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProcessedText$ProcessedChar } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText$ProcessedChar.d.ts'
export interface ProcessedText extends Object{
    readonly chars: ProcessedText$ProcessedChar[];
    /**
     * Elements: start char index, to char index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:41}
     */
    readonly strikeThroughs: (Object | null)[];
    /**
     * Elements: start char index, to char index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:34}
     */
    readonly underlines: (Object | null)[];
}
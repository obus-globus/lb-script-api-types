import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProcessedText$ProcessedChar } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText$ProcessedChar.d.ts'
export interface ProcessedText extends Object{
    readonly chars: ProcessedText$ProcessedChar[];
    /**
     * Elements: start char index, to char index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:36}
     */
    readonly strikeThroughs: (Object | null)[];
    /**
     * Elements: start char index, to char index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:29}
     */
    readonly underlines: (Object | null)[];
}
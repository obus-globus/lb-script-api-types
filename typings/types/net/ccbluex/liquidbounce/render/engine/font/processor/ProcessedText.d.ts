import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProcessedText$ProcessedChar } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText$ProcessedChar.d.ts'
export interface ProcessedText extends Object{
    readonly chars: ProcessedText$ProcessedChar[];
    /**
     * Elements: start codepoint index, end codepoint index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:41}
     */
    readonly strikeThroughs: (Object | null)[];
    /**
     * Elements: start codepoint index, end codepoint index, ...
     *
     * Size should be even,
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.kt:34}
     */
    readonly underlines: (Object | null)[];
}
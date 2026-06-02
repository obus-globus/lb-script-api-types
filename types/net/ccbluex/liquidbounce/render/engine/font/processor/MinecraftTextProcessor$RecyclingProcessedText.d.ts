import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProcessedText } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.d.ts'
import type { ProcessedText$ProcessedChar } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText$ProcessedChar.d.ts'
export class MinecraftTextProcessor$RecyclingProcessedText extends Object implements ProcessedText {
    constructor(chars: ProcessedText$ProcessedChar[], underlines: (Object | null)[], strikeThroughs: (Object | null)[])
    readonly chars: ProcessedText$ProcessedChar[];
    readonly strikeThroughs: (Object | null)[];
    readonly underlines: (Object | null)[];
}
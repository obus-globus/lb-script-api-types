import type { Style } from '../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextFormatting } from '../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
export class TextUtil$ResetTrackingStyle extends Style {
    private constructor()
    // private wasReset: boolean;
    copy(): Style;
    setFormatting(arg0: TextFormatting): Style;
    setFormatting(...arg0: TextFormatting[]): Style;
}
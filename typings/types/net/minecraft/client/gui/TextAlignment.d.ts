import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class TextAlignment extends Enum<TextAlignment> {
    static CENTER: TextAlignment;
    static LEFT: TextAlignment;
    static RIGHT: TextAlignment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TextAlignment;
    static values(): (Object | null)[];
    private constructor()
    calculateLeft(anchor: number, width: number): number;
    calculateLeft(anchor: number, font: Font, text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): number;
    name(): "LEFT" | "CENTER" | "RIGHT";
}
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TextFormatting$Type extends Enum<TextFormatting$Type> {
    static COLOR: TextFormatting$Type;
    static FORMATTING: TextFormatting$Type;
    static RGB: TextFormatting$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TextFormatting$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "COLOR" | "FORMATTING" | "RGB";
}
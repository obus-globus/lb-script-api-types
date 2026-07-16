import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TextFormatting$Type extends Enum<TextFormatting$Type> {
    static COLOR: TextFormatting$Type;
    static FORMATTING: TextFormatting$Type;
    static RGB: TextFormatting$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextFormatting$Type;
    static values(): TextFormatting$Type[];
    private constructor()
    name(): "COLOR" | "FORMATTING" | "RGB";
}
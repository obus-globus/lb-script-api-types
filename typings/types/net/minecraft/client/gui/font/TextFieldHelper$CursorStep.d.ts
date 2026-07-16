import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TextFieldHelper$CursorStep extends Enum<TextFieldHelper$CursorStep> {
    static CHARACTER: TextFieldHelper$CursorStep;
    static WORD: TextFieldHelper$CursorStep;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TextFieldHelper$CursorStep;
    static values(): TextFieldHelper$CursorStep[];
    private constructor()
    name(): "CHARACTER" | "WORD";
}
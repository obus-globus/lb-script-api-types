import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ATNType extends Enum<ATNType> {
    static LEXER: ATNType;
    static PARSER: ATNType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ATNType;
    static values(): ATNType[];
    private constructor()
    name(): "LEXER" | "PARSER";
}
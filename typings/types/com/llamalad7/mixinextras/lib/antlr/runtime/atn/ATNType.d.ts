import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ATNType extends Enum<ATNType> {
    static LEXER: ATNType;
    static PARSER: ATNType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static values(): ATNType[];
    private constructor()
    name(): "LEXER" | "PARSER";
}
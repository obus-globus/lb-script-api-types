import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DateParser$Token extends Enum<DateParser$Token> {
    static END: DateParser$Token;
    static NAME: DateParser$Token;
    static NUMBER: DateParser$Token;
    static PARENTHESIS: DateParser$Token;
    static SEPARATOR: DateParser$Token;
    static SIGN: DateParser$Token;
    static UNKNOWN: DateParser$Token;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DateParser$Token;
    static values(): DateParser$Token[];
    private constructor()
    name(): "UNKNOWN" | "NUMBER" | "SEPARATOR" | "PARENTHESIS" | "NAME" | "SIGN" | "END";
}
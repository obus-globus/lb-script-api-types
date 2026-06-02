import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExceptionType extends Enum<ExceptionType> {
    static EXIT: ExceptionType;
    static INTERRUPT: ExceptionType;
    static PARSE_ERROR: ExceptionType;
    static RUNTIME_ERROR: ExceptionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ExceptionType;
    static values(): (Object | null)[];
    private constructor()
    name(): "EXIT" | "INTERRUPT" | "RUNTIME_ERROR" | "PARSE_ERROR";
}
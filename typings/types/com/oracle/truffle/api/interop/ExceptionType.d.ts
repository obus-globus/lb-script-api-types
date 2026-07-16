import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExceptionType extends Enum<ExceptionType> {
    static EXIT: ExceptionType;
    static INTERRUPT: ExceptionType;
    static PARSE_ERROR: ExceptionType;
    static RUNTIME_ERROR: ExceptionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ExceptionType;
    static values(): ExceptionType[];
    private constructor()
    name(): "EXIT" | "INTERRUPT" | "RUNTIME_ERROR" | "PARSE_ERROR";
}
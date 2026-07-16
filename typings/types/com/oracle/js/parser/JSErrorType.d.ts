import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class JSErrorType extends Enum<JSErrorType> {
    static AggregateError: JSErrorType;
    static Error: JSErrorType;
    static EvalError: JSErrorType;
    static RangeError: JSErrorType;
    static ReferenceError: JSErrorType;
    static SyntaxError: JSErrorType;
    static TypeError: JSErrorType;
    static URIError: JSErrorType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSErrorType;
    static values(): JSErrorType[];
    private constructor()
    name(): "Error" | "EvalError" | "RangeError" | "ReferenceError" | "SyntaxError" | "TypeError" | "URIError" | "AggregateError";
}
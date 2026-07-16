import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ResponseMode extends Enum<ResponseMode> {
    static FORM_POST: ResponseMode;
    static FRAGMENT: ResponseMode;
    static QUERY: ResponseMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ResponseMode;
    static values(): ResponseMode[];
    private constructor(arg2: string)
    // private responseMode: string;
    toString(): string;
    name(): "FORM_POST" | "QUERY" | "FRAGMENT";
}
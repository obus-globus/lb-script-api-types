import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ResponseMode extends Enum<ResponseMode> {
    static FORM_POST: ResponseMode;
    static FRAGMENT: ResponseMode;
    static QUERY: ResponseMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ResponseMode;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private responseMode: string;
    toString(): string;
    name(): "FORM_POST" | "QUERY" | "FRAGMENT";
}
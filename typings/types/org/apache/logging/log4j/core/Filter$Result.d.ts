import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Filter$Result extends Enum<Filter$Result> {
    static ACCEPT: Filter$Result;
    static DENY: Filter$Result;
    static NEUTRAL: Filter$Result;
    static toResult(paramname: string): Filter$Result;
    static toResult(paramname: string, paramdefaultResult: Filter$Result): Filter$Result;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Filter$Result;
    static values(): Filter$Result[];
    private constructor()
    name(): "ACCEPT" | "NEUTRAL" | "DENY";
}
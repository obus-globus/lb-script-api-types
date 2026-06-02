import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Filter$Result extends Enum<Filter$Result> {
    static ACCEPT: Filter$Result;
    static DENY: Filter$Result;
    static NEUTRAL: Filter$Result;
    static toResult(paramname: string): Filter$Result;
    static toResult(paramname: string, paramdefaultResult: Filter$Result): Filter$Result;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Filter$Result;
    static values(): (Object | null)[];
    private constructor()
    name(): "ACCEPT" | "NEUTRAL" | "DENY";
}
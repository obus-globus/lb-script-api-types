import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TruffleString$CodeRange extends Enum<TruffleString$CodeRange> {
    static ASCII: TruffleString$CodeRange;
    static BMP: TruffleString$CodeRange;
    static BROKEN: TruffleString$CodeRange;
    static LATIN_1: TruffleString$CodeRange;
    static VALID: TruffleString$CodeRange;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleString$CodeRange;
    static values(): (Object | null)[];
    private constructor()
    isSubsetOf(other: TruffleString$CodeRange): boolean;
    isSupersetOf(other: TruffleString$CodeRange): boolean;
    name(): "ASCII" | "LATIN_1" | "BMP" | "VALID" | "BROKEN";
}
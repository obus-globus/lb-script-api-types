import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TruffleString$CodeRange extends Enum<TruffleString$CodeRange> {
    static ASCII: TruffleString$CodeRange;
    static BMP: TruffleString$CodeRange;
    static BROKEN: TruffleString$CodeRange;
    static LATIN_1: TruffleString$CodeRange;
    static VALID: TruffleString$CodeRange;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TruffleString$CodeRange;
    static values(): TruffleString$CodeRange[];
    private constructor()
    isSubsetOf(other: TruffleString$CodeRange): boolean;
    isSupersetOf(other: TruffleString$CodeRange): boolean;
    name(): "ASCII" | "LATIN_1" | "BMP" | "VALID" | "BROKEN";
}
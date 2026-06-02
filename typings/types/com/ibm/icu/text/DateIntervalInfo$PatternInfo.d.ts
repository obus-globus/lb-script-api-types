import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class DateIntervalInfo$PatternInfo extends Object implements Serializable, Cloneable {
    constructor(arg0: string, arg1: string, arg2: boolean)
    // private fFirstDateInPtnIsLaterDate: boolean;
    // private fIntervalPatternFirstPart: string;
    // private fIntervalPatternSecondPart: string;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    firstDateInPtnIsLaterDate(): boolean;
    getFirstPart(): string;
    getSecondPart(): string;
    hashCode(): number;
    toString(): string;
}
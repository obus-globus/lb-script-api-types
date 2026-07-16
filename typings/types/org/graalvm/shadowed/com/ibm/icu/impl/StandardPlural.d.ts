import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StandardPlural extends Enum<StandardPlural> {
    static COUNT: number;
    static EQ_0: StandardPlural;
    static EQ_1: StandardPlural;
    static FEW: StandardPlural;
    static MANY: StandardPlural;
    static ONE: StandardPlural;
    static OTHER: StandardPlural;
    static OTHER_INDEX: number;
    static TWO: StandardPlural;
    static VALUES: StandardPlural[];
    static ZERO: StandardPlural;
    static fromString(paramkeyword: CharSequence): StandardPlural;
    static indexFromString(paramkeyword: CharSequence): number;
    static indexOrNegativeFromString(paramkeyword: CharSequence): number;
    static indexOrOtherIndexFromString(paramkeyword: CharSequence): number;
    static orNullFromString(paramkeyword: CharSequence): StandardPlural;
    static orOtherFromString(paramkeyword: CharSequence): StandardPlural;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StandardPlural;
    static values(): StandardPlural[];
    private constructor(kw: string)
    readonly keyword: string;
    getKeyword(): string;
    name(): "ZERO" | "ONE" | "TWO" | "FEW" | "MANY" | "OTHER" | "EQ_0" | "EQ_1";
}
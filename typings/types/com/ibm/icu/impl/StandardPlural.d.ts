import type { Class } from '../../../../java/lang/Class.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
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
    static fromString(paramarg0: CharSequence): StandardPlural;
    static indexFromString(paramarg0: CharSequence): number;
    static indexOrNegativeFromString(paramarg0: CharSequence): number;
    static indexOrOtherIndexFromString(paramarg0: CharSequence): number;
    static orNullFromString(paramarg0: CharSequence): StandardPlural;
    static orOtherFromString(paramarg0: CharSequence): StandardPlural;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StandardPlural;
    static values(): StandardPlural[];
    private constructor(arg2: string)
    readonly keyword: string;
    getKeyword(): string;
    name(): "ZERO" | "ONE" | "TWO" | "FEW" | "MANY" | "OTHER" | "EQ_0" | "EQ_1";
}
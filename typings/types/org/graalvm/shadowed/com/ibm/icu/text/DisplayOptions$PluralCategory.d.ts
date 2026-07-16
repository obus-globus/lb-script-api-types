import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DisplayOptions$PluralCategory extends Enum<DisplayOptions$PluralCategory> {
    static FEW: DisplayOptions$PluralCategory;
    static MANY: DisplayOptions$PluralCategory;
    static ONE: DisplayOptions$PluralCategory;
    static OTHER: DisplayOptions$PluralCategory;
    static TWO: DisplayOptions$PluralCategory;
    static UNDEFINED: DisplayOptions$PluralCategory;
    static VALUES: DisplayOptions$PluralCategory[];
    static ZERO: DisplayOptions$PluralCategory;
    static fromIdentifier(paramidentifier: string): DisplayOptions$PluralCategory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DisplayOptions$PluralCategory;
    static values(): DisplayOptions$PluralCategory[];
    private constructor(identifier: string)
    readonly identifier: string;
    getIdentifier(): string;
    name(): "UNDEFINED" | "ZERO" | "ONE" | "TWO" | "FEW" | "MANY" | "OTHER";
}
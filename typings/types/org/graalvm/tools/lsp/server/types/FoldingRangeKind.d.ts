import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class FoldingRangeKind extends Enum<FoldingRangeKind> {
    static Comment: FoldingRangeKind;
    static Imports: FoldingRangeKind;
    static Region: FoldingRangeKind;
    static get(paramstringValue: string): FoldingRangeKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FoldingRangeKind;
    static values(): FoldingRangeKind[];
    private constructor(stringValue: string)
    readonly stringValue: string;
    getStringValue(): string;
    name(): "Comment" | "Imports" | "Region";
}
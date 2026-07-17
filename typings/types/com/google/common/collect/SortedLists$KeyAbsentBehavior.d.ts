import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SortedLists$KeyAbsentBehavior extends Enum<SortedLists$KeyAbsentBehavior> {
    static INVERTED_INSERTION_INDEX: SortedLists$KeyAbsentBehavior;
    static NEXT_HIGHER: SortedLists$KeyAbsentBehavior;
    static NEXT_LOWER: SortedLists$KeyAbsentBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SortedLists$KeyAbsentBehavior;
    static values(): SortedLists$KeyAbsentBehavior[];
    private constructor()
    resultIndex(higherIndex: number): number;
    name(): "NEXT_LOWER" | "NEXT_HIGHER" | "INVERTED_INSERTION_INDEX";
}
import type { SortedLists$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SortedLists$KeyAbsentBehavior extends Enum<SortedLists$KeyAbsentBehavior> {
    static INVERTED_INSERTION_INDEX: SortedLists$KeyAbsentBehavior;
    static NEXT_HIGHER: SortedLists$KeyAbsentBehavior;
    static NEXT_LOWER: SortedLists$KeyAbsentBehavior;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SortedLists$KeyAbsentBehavior;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: SortedLists$1)
    resultIndex(higherIndex: number): number;
    name(): "NEXT_LOWER" | "NEXT_HIGHER" | "INVERTED_INSERTION_INDEX";
}
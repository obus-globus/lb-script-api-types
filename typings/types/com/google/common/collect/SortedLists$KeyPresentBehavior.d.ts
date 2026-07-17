import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SortedLists$KeyPresentBehavior extends Enum<SortedLists$KeyPresentBehavior> {
    static ANY_PRESENT: SortedLists$KeyPresentBehavior;
    static FIRST_AFTER: SortedLists$KeyPresentBehavior;
    static FIRST_PRESENT: SortedLists$KeyPresentBehavior;
    static LAST_BEFORE: SortedLists$KeyPresentBehavior;
    static LAST_PRESENT: SortedLists$KeyPresentBehavior;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SortedLists$KeyPresentBehavior;
    static values(): SortedLists$KeyPresentBehavior[];
    private constructor()
    resultIndex<E extends unknown>(comparator: (param0: E, param1: E) => number, key: E, list: E[], foundIndex: number): number;
    name(): "ANY_PRESENT" | "LAST_PRESENT" | "FIRST_PRESENT" | "FIRST_AFTER" | "LAST_BEFORE";
}
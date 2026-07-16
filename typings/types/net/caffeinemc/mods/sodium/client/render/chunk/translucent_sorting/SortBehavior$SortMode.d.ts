import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SortBehavior$SortMode extends Enum<SortBehavior$SortMode> {
    static DYNAMIC: SortBehavior$SortMode;
    static NONE: SortBehavior$SortMode;
    static STATIC: SortBehavior$SortMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SortBehavior$SortMode;
    static values(): SortBehavior$SortMode[];
    private constructor()
    name(): "NONE" | "STATIC" | "DYNAMIC";
}
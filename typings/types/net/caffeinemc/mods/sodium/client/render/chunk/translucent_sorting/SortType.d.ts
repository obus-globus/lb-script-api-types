import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SortType extends Enum<SortType> {
    static DYNAMIC: SortType;
    static EMPTY_SECTION: SortType;
    static NONE: SortType;
    static NO_TRANSLUCENT: SortType;
    static STATIC_NORMAL_RELATIVE: SortType;
    static STATIC_TOPO: SortType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SortType;
    static values(): SortType[];
    private constructor(arg2: boolean, arg3: boolean)
    allowSliceReordering: boolean;
    needsDirectionMixing: boolean;
    name(): "EMPTY_SECTION" | "NO_TRANSLUCENT" | "NONE" | "STATIC_NORMAL_RELATIVE" | "STATIC_TOPO" | "DYNAMIC";
}
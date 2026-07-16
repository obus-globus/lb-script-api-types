import type { Mod } from '../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModMenuConfig$Sorting extends Enum<ModMenuConfig$Sorting> {
    static ASCENDING: ModMenuConfig$Sorting;
    static DESCENDING: ModMenuConfig$Sorting;
    static HAS_UPDATE: ModMenuConfig$Sorting;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModMenuConfig$Sorting;
    static values(): ModMenuConfig$Sorting[];
    private constructor(arg2: (param0: Mod, param1: Mod) => number)
    readonly comparator: (param0: Mod, param1: Mod) => number;
    getComparator(): (param0: Mod, param1: Mod) => number;
    name(): "ASCENDING" | "DESCENDING" | "HAS_UPDATE";
}
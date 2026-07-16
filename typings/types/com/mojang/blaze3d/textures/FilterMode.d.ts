import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FilterMode extends Enum<FilterMode> {
    static LINEAR: FilterMode;
    static NEAREST: FilterMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): FilterMode;
    static values(): FilterMode[];
    private constructor()
    name(): "NEAREST" | "LINEAR";
}
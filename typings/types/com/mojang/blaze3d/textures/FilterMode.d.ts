import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FilterMode extends Enum<FilterMode> {
    static LINEAR: FilterMode;
    static NEAREST: FilterMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FilterMode;
    static values(): FilterMode[];
    private constructor()
    name(): "NEAREST" | "LINEAR";
}
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CharsetMBCS$SISO_Option extends Enum<CharsetMBCS$SISO_Option> {
    static SI: CharsetMBCS$SISO_Option;
    static SO: CharsetMBCS$SISO_Option;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CharsetMBCS$SISO_Option;
    static values(): CharsetMBCS$SISO_Option[];
    private constructor()
    name(): "SI" | "SO";
}
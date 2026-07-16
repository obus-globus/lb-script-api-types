import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$DisplayLength extends Enum<DisplayOptions$DisplayLength> {
    static LENGTH_FULL: DisplayOptions$DisplayLength;
    static LENGTH_SHORT: DisplayOptions$DisplayLength;
    static UNDEFINED: DisplayOptions$DisplayLength;
    static VALUES: DisplayOptions$DisplayLength[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DisplayOptions$DisplayLength;
    static values(): DisplayOptions$DisplayLength[];
    private constructor()
    name(): "UNDEFINED" | "LENGTH_FULL" | "LENGTH_SHORT";
}
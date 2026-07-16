import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DisplayOptions$NameStyle extends Enum<DisplayOptions$NameStyle> {
    static DIALECT_NAMES: DisplayOptions$NameStyle;
    static STANDARD_NAMES: DisplayOptions$NameStyle;
    static UNDEFINED: DisplayOptions$NameStyle;
    static VALUES: DisplayOptions$NameStyle[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DisplayOptions$NameStyle;
    static values(): DisplayOptions$NameStyle[];
    private constructor()
    name(): "UNDEFINED" | "STANDARD_NAMES" | "DIALECT_NAMES";
}
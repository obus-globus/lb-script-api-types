import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TextStyle extends Enum<TextStyle> {
    static FULL: TextStyle;
    static FULL_STANDALONE: TextStyle;
    static NARROW: TextStyle;
    static NARROW_STANDALONE: TextStyle;
    static SHORT: TextStyle;
    static SHORT_STANDALONE: TextStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TextStyle;
    static values(): TextStyle[];
    private constructor(arg2: number, arg3: number)
    // private calendarStyle: number;
    // private zoneNameStyleIndex: number;
    asNormal(): TextStyle;
    asStandalone(): TextStyle;
    isStandalone(): boolean;
    toCalendarStyle(): number;
    zoneNameStyleIndex(): number;
    name(): "FULL" | "FULL_STANDALONE" | "SHORT" | "SHORT_STANDALONE" | "NARROW" | "NARROW_STANDALONE";
}
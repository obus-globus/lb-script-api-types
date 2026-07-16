import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateTimePatternGenerator$DisplayWidth extends Enum<DateTimePatternGenerator$DisplayWidth> {
    static ABBREVIATED: DateTimePatternGenerator$DisplayWidth;
    static NARROW: DateTimePatternGenerator$DisplayWidth;
    static WIDE: DateTimePatternGenerator$DisplayWidth;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DateTimePatternGenerator$DisplayWidth;
    static values(): DateTimePatternGenerator$DisplayWidth[];
    private constructor(cldrKey: string)
    // private cldrKey: string;
    // private cldrKey(): string;
    name(): "WIDE" | "ABBREVIATED" | "NARROW";
}
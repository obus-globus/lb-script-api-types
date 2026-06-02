import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class DateTimePatternGenerator$DisplayWidth extends Enum<DateTimePatternGenerator$DisplayWidth> {
    static ABBREVIATED: DateTimePatternGenerator$DisplayWidth;
    static NARROW: DateTimePatternGenerator$DisplayWidth;
    static WIDE: DateTimePatternGenerator$DisplayWidth;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DateTimePatternGenerator$DisplayWidth;
    static values(): (Object | null)[];
    private constructor(cldrKey: string)
    // private cldrKey: string;
    // private cldrKey(): string;
    name(): "WIDE" | "ABBREVIATED" | "NARROW";
}
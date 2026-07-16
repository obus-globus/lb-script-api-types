import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class FixedDateFormat$FixedTimeZoneFormat extends Enum<FixedDateFormat$FixedTimeZoneFormat> {
    static HH: FixedDateFormat$FixedTimeZoneFormat;
    static HHCMM: FixedDateFormat$FixedTimeZoneFormat;
    static HHMM: FixedDateFormat$FixedTimeZoneFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): FixedDateFormat$FixedTimeZoneFormat;
    static values(): FixedDateFormat$FixedTimeZoneFormat[];
    private constructor()
    private constructor(timeSeparatorChar: string, minutes: boolean, length: number)
    readonly length: number;
    // private timeSeparatorChar: string;
    // private timeSeparatorCharLen: number;
    // private useMinutes: boolean;
    getLength(): number;
    // private write(offset: number, buffer: string[], pos: number): number;
    name(): "HH" | "HHMM" | "HHCMM";
}
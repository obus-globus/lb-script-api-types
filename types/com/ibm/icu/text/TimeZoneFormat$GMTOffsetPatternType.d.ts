import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$GMTOffsetPatternType extends Enum<TimeZoneFormat$GMTOffsetPatternType> {
    static NEGATIVE_H: TimeZoneFormat$GMTOffsetPatternType;
    static NEGATIVE_HM: TimeZoneFormat$GMTOffsetPatternType;
    static NEGATIVE_HMS: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_H: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_HM: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_HMS: TimeZoneFormat$GMTOffsetPatternType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TimeZoneFormat$GMTOffsetPatternType;
    static values(): (Object | null)[];
    private constructor(arg2: string, arg3: string, arg4: boolean)
    // private _defaultPattern: string;
    // private _isPositive: boolean;
    // private _required: string;
    // private defaultPattern(): string;
    // private isPositive(): boolean;
    // private required(): string;
    name(): "POSITIVE_HM" | "POSITIVE_HMS" | "NEGATIVE_HM" | "NEGATIVE_HMS" | "POSITIVE_H" | "NEGATIVE_H";
}
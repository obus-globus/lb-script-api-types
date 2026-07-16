import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneFormat$GMTOffsetPatternType extends Enum<TimeZoneFormat$GMTOffsetPatternType> {
    static NEGATIVE_H: TimeZoneFormat$GMTOffsetPatternType;
    static NEGATIVE_HM: TimeZoneFormat$GMTOffsetPatternType;
    static NEGATIVE_HMS: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_H: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_HM: TimeZoneFormat$GMTOffsetPatternType;
    static POSITIVE_HMS: TimeZoneFormat$GMTOffsetPatternType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TimeZoneFormat$GMTOffsetPatternType;
    static values(): TimeZoneFormat$GMTOffsetPatternType[];
    private constructor(defaultPattern: string, required: string, isPositive: boolean)
    // private _defaultPattern: string;
    // private _isPositive: boolean;
    // private _required: string;
    // private defaultPattern(): string;
    // private isPositive(): boolean;
    // private required(): string;
    name(): "POSITIVE_HM" | "POSITIVE_HMS" | "NEGATIVE_HM" | "NEGATIVE_HMS" | "POSITIVE_H" | "NEGATIVE_H";
}
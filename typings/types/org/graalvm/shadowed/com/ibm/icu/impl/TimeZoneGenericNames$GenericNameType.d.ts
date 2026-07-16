import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneGenericNames$GenericNameType extends Enum<TimeZoneGenericNames$GenericNameType> {
    static LOCATION: TimeZoneGenericNames$GenericNameType;
    static LONG: TimeZoneGenericNames$GenericNameType;
    static SHORT: TimeZoneGenericNames$GenericNameType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TimeZoneGenericNames$GenericNameType;
    static values(): TimeZoneGenericNames$GenericNameType[];
    private constructor(...fallbackTypeOf: string[])
    // private _fallbackTypeOf: string[];
    isFallbackTypeOf(type: TimeZoneGenericNames$GenericNameType): boolean;
    name(): "LOCATION" | "LONG" | "SHORT";
}
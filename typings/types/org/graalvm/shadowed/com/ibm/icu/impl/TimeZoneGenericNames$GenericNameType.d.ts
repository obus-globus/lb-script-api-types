import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class TimeZoneGenericNames$GenericNameType extends Enum<TimeZoneGenericNames$GenericNameType> {
    static LOCATION: TimeZoneGenericNames$GenericNameType;
    static LONG: TimeZoneGenericNames$GenericNameType;
    static SHORT: TimeZoneGenericNames$GenericNameType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TimeZoneGenericNames$GenericNameType;
    static values(): (Object | null)[];
    private constructor(...fallbackTypeOf: string[])
    // private _fallbackTypeOf: string[];
    isFallbackTypeOf(type: TimeZoneGenericNames$GenericNameType): boolean;
    name(): "LOCATION" | "LONG" | "SHORT";
}
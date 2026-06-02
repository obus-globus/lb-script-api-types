import type { TimeZoneGenericNames$GenericNameType } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeZoneGenericNames$GenericMatchInfo extends Object {
    private constructor(arg0: TimeZoneGenericNames$GenericNameType, arg1: string, arg2: number)
    private constructor(arg0: TimeZoneGenericNames$GenericNameType, arg1: string, arg2: number, arg3: TimeZoneFormat$TimeType)
    // private matchLength: number;
    // private nameType: TimeZoneGenericNames$GenericNameType;
    // private timeType: TimeZoneFormat$TimeType;
    // private tzID: string;
    matchLength(): number;
    nameType(): TimeZoneGenericNames$GenericNameType;
    timeType(): TimeZoneFormat$TimeType;
    tzID(): string;
}
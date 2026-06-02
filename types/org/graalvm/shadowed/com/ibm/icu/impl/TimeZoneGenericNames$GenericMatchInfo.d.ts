import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZoneGenericNames$GenericNameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneFormat$TimeType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneFormat$TimeType.d.ts'
export class TimeZoneGenericNames$GenericMatchInfo extends Object {
    private constructor(nameType: TimeZoneGenericNames$GenericNameType, tzID: string, matchLength: number)
    private constructor(nameType: TimeZoneGenericNames$GenericNameType, tzID: string, matchLength: number, timeType: TimeZoneFormat$TimeType)
    // private matchLength: number;
    // private nameType: TimeZoneGenericNames$GenericNameType;
    // private timeType: TimeZoneFormat$TimeType;
    // private tzID: string;
    matchLength(): number;
    nameType(): TimeZoneGenericNames$GenericNameType;
    timeType(): TimeZoneFormat$TimeType;
    tzID(): string;
}
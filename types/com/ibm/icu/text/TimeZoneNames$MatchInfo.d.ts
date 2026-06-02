import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeZoneNames$MatchInfo extends Object {
    constructor(arg0: TimeZoneNames$NameType, arg1: string, arg2: string, arg3: number)
    // private _matchLength: number;
    // private _mzID: string;
    // private _nameType: TimeZoneNames$NameType;
    // private _tzID: string;
    matchLength(): number;
    mzID(): string;
    nameType(): TimeZoneNames$NameType;
    tzID(): string;
}
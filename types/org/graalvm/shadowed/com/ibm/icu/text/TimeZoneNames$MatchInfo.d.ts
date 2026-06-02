import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
export class TimeZoneNames$MatchInfo extends Object {
    constructor(nameType: TimeZoneNames$NameType, tzID: string, mzID: string, matchLength: number)
    // private _matchLength: number;
    // private _mzID: string;
    // private _nameType: TimeZoneNames$NameType;
    // private _tzID: string;
    matchLength(): number;
    mzID(): string;
    nameType(): TimeZoneNames$NameType;
    tzID(): string;
}
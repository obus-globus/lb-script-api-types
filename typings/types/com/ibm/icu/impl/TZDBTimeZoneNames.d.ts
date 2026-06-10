import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class TZDBTimeZoneNames extends TimeZoneNames {
    static getInstance(paramarg0: ULocale): TimeZoneNames;
    static getInstance(paramarg0: Locale): TimeZoneNames;
    static getTZDBInstance(paramarg0: ULocale): TimeZoneNames;
    constructor(arg0: ULocale)
    // private _locale: ULocale;
    // private _region: string;
    find(arg0: CharSequence, arg1: number, arg2: TimeZoneNames$NameType[]): TimeZoneNames$MatchInfo[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(arg0: string): string[];
    getMetaZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    getMetaZoneID(arg0: string, arg1: number): string;
    getReferenceZoneID(arg0: string, arg1: string): string;
    // private getTargetRegion(): string;
    getTimeZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
}
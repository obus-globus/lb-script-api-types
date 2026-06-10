import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneNames$DefaultTimeZoneNames extends TimeZoneNames {
    static INSTANCE: TimeZoneNames$DefaultTimeZoneNames;
    static getInstance(paramlocale: Locale): TimeZoneNames;
    static getInstance(paramlocale: ULocale): TimeZoneNames;
    static getTZDBInstance(paramlocale: ULocale): TimeZoneNames;
    private constructor()
    find(text: CharSequence, start: number, nameTypes: TimeZoneNames$NameType[]): TimeZoneNames$MatchInfo[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(tzID: string): string[];
    getMetaZoneDisplayName(mzID: string, type: TimeZoneNames$NameType): string;
    getMetaZoneID(tzID: string, date: number): string;
    getReferenceZoneID(mzID: string, region: string): string;
    getTimeZoneDisplayName(tzID: string, type: TimeZoneNames$NameType): string;
}
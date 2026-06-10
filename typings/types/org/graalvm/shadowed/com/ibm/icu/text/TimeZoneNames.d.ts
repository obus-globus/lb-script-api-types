import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class TimeZoneNames extends Object implements Serializable {
    static getInstance(paramlocale: Locale): TimeZoneNames;
    static getInstance(paramlocale: ULocale): TimeZoneNames;
    static getTZDBInstance(paramlocale: ULocale): TimeZoneNames;
    constructor()
    find(text: CharSequence, start: number, types: TimeZoneNames$NameType[]): TimeZoneNames$MatchInfo[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(tzID: string): string[];
    getDisplayName(tzID: string, type: TimeZoneNames$NameType, date: number): string;
    getDisplayNames(tzID: string, types: TimeZoneNames$NameType[], date: number, dest: string[], destOffset: number): void;
    getExemplarLocationName(tzID: string): string;
    getMetaZoneDisplayName(mzID: string, type: TimeZoneNames$NameType): string;
    getMetaZoneID(tzID: string, date: number): string;
    getReferenceZoneID(mzID: string, region: string): string;
    getTimeZoneDisplayName(tzID: string, type: TimeZoneNames$NameType): string;
    loadAllDisplayNames(): void;
}
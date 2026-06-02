import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class TimeZoneNames$DefaultTimeZoneNames extends TimeZoneNames {
    static INSTANCE: TimeZoneNames$DefaultTimeZoneNames;
    static getInstance(paramarg0: ULocale): TimeZoneNames;
    static getInstance(paramarg0: Locale): TimeZoneNames;
    static getTZDBInstance(paramarg0: ULocale): TimeZoneNames;
    private constructor()
    find(arg0: CharSequence, arg1: number, arg2: TimeZoneNames$NameType[]): E[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(arg0: string): string[];
    getMetaZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    getMetaZoneID(arg0: string, arg1: number): string;
    getReferenceZoneID(arg0: string, arg1: string): string;
    getTimeZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
}
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class TimeZoneNames extends Object implements Serializable {
    static getInstance(paramarg0: ULocale): TimeZoneNames;
    static getInstance(paramarg0: Locale): TimeZoneNames;
    static getTZDBInstance(paramarg0: ULocale): TimeZoneNames;
    constructor()
    find(arg0: CharSequence, arg1: number, arg2: TimeZoneNames$NameType[]): E[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(arg0: string): string[];
    getDisplayName(arg0: string, arg1: TimeZoneNames$NameType, arg2: number): string;
    getDisplayNames(arg0: string, arg1: TimeZoneNames$NameType[], arg2: number, arg3: string[], arg4: number): void;
    getExemplarLocationName(arg0: string): string;
    getMetaZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    getMetaZoneID(arg0: string, arg1: number): string;
    getReferenceZoneID(arg0: string, arg1: string): string;
    getTimeZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    loadAllDisplayNames(): void;
}
import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { TextTrieMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNamesImpl$NameSearchHandler } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$NameSearchHandler.d.ts'
import type { TimeZoneNamesImpl$ZNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneNamesImpl$ZNames.d.ts'
import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$NameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneNamesImpl extends TimeZoneNames {
    static getDefaultExemplarLocationName(paramtzID: string): string;
    static getInstance(paramlocale: Locale): TimeZoneNames;
    static getInstance(paramlocale: ULocale): TimeZoneNames;
    static getTZDBInstance(paramlocale: ULocale): TimeZoneNames;
    constructor(locale: ULocale)
    // private _mzNamesMap: { [key: string]: TimeZoneNamesImpl$ZNames };
    // private _namesFullyLoaded: boolean;
    // private _namesTrie: TextTrieMap<TimeZoneNamesImpl$NameInfo>;
    // private _namesTrieFullyLoaded: boolean;
    // private _tzNamesMap: { [key: string]: TimeZoneNamesImpl$ZNames };
    // private _zoneStrings: ICUResourceBundle;
    // private addAllNamesIntoTrie(): void;
    // private doFind(handler: TimeZoneNamesImpl$NameSearchHandler, text: CharSequence, start: number): E[];
    find(text: CharSequence, start: number, nameTypes: TimeZoneNames$NameType[]): E[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(tzID: string): string[];
    getDisplayNames(tzID: string, types: TimeZoneNames$NameType[], date: number, dest: string[], destOffset: number): void;
    getExemplarLocationName(tzID: string): string;
    getMetaZoneDisplayName(mzID: string, type: TimeZoneNames$NameType): string;
    getMetaZoneID(tzID: string, date: number): string;
    getReferenceZoneID(mzID: string, region: string): string;
    getTimeZoneDisplayName(tzID: string, type: TimeZoneNames$NameType): string;
    // private initialize(locale: ULocale): void;
    // private internalLoadAllDisplayNames(): void;
    loadAllDisplayNames(): void;
    // private loadMetaZoneNames(mzID: string): TimeZoneNamesImpl$ZNames;
    // private loadStrings(tzCanonicalID: string): void;
    // private loadTimeZoneNames(tzID: string): TimeZoneNamesImpl$ZNames;
    // private readObject(in_: ObjectInputStream): void;
    // private writeObject(out: ObjectOutputStream): void;
}
import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { TextTrieMap } from '../../../../com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneNamesImpl$NameInfo } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$NameInfo.d.ts'
import type { TimeZoneNamesImpl$NameSearchHandler } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$NameSearchHandler.d.ts'
import type { TimeZoneNamesImpl$ZNames } from '../../../../com/ibm/icu/impl/TimeZoneNamesImpl$ZNames.d.ts'
import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$NameType } from '../../../../com/ibm/icu/text/TimeZoneNames$NameType.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class TimeZoneNamesImpl extends TimeZoneNames {
    static getDefaultExemplarLocationName(paramarg0: string): string;
    static getInstance(paramarg0: ULocale): TimeZoneNames;
    static getInstance(paramarg0: Locale): TimeZoneNames;
    static getTZDBInstance(paramarg0: ULocale): TimeZoneNames;
    constructor(arg0: ULocale)
    // private _mzNamesMap: { [key: string]: TimeZoneNamesImpl$ZNames };
    // private _namesFullyLoaded: boolean;
    // private _namesTrie: TextTrieMap<TimeZoneNamesImpl$NameInfo>;
    // private _namesTrieFullyLoaded: boolean;
    // private _tzNamesMap: { [key: string]: TimeZoneNamesImpl$ZNames };
    // private _zoneStrings: ICUResourceBundle;
    // private addAllNamesIntoTrie(): void;
    // private doFind(arg0: TimeZoneNamesImpl$NameSearchHandler, arg1: CharSequence, arg2: number): E[];
    find(arg0: CharSequence, arg1: number, arg2: TimeZoneNames$NameType[]): E[];
    getAvailableMetaZoneIDs(): string[];
    getAvailableMetaZoneIDs(arg0: string): string[];
    getDisplayNames(arg0: string, arg1: TimeZoneNames$NameType[], arg2: number, arg3: string[], arg4: number): void;
    getExemplarLocationName(arg0: string): string;
    getMetaZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    getMetaZoneID(arg0: string, arg1: number): string;
    getReferenceZoneID(arg0: string, arg1: string): string;
    getTimeZoneDisplayName(arg0: string, arg1: TimeZoneNames$NameType): string;
    // private initialize(arg0: ULocale): void;
    // private internalLoadAllDisplayNames(): void;
    loadAllDisplayNames(): void;
    // private loadMetaZoneNames(arg0: string): TimeZoneNamesImpl$ZNames;
    // private loadStrings(arg0: string): void;
    // private loadTimeZoneNames(arg0: string): TimeZoneNamesImpl$ZNames;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
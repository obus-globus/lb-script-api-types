import type { TextTrieMap } from '../../../../com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneGenericNames$GenericMatchInfo } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$GenericMatchInfo.d.ts'
import type { TimeZoneGenericNames$GenericNameType } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneGenericNames$NameInfo } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$NameInfo.d.ts'
import type { TimeZoneGenericNames$Pattern } from '../../../../com/ibm/icu/impl/TimeZoneGenericNames$Pattern.d.ts'
import type { LocaleDisplayNames } from '../../../../com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { TimeZoneNames } from '../../../../com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { Freezable } from '../../../../com/ibm/icu/util/Freezable.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { MessageFormat } from '../../../../java/text/MessageFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeZoneGenericNames extends Object implements Freezable<TimeZoneGenericNames>, Serializable {
    static getInstance(paramarg0: ULocale): TimeZoneGenericNames;
    private constructor(arg0: ULocale)
    constructor(arg0: ULocale, arg1: TimeZoneNames)
    // private _frozen: boolean;
    // private _genericLocationNamesMap: { [key: string]: string };
    // private _genericPartialLocationNamesMap: { [key: string]: string };
    // private _gnamesTrie: TextTrieMap<TimeZoneGenericNames$NameInfo>;
    // private _gnamesTrieFullyLoaded: boolean;
    // private _locale: ULocale;
    // private _localeDisplayNamesRef: WeakReference<LocaleDisplayNames>;
    // private _patternFormatters: MessageFormat[];
    // private _region: string;
    // private _tznames: TimeZoneNames;
    cloneAsThawed(): TimeZoneGenericNames;
    // private createGenericMatchInfo(arg0: TimeZoneNames$MatchInfo): TimeZoneGenericNames$GenericMatchInfo;
    find(arg0: string, arg1: number, arg2: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo[];
    findBestMatch(arg0: string, arg1: number, arg2: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo;
    // private findLocal(arg0: string, arg1: number, arg2: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo[];
    // private findTimeZoneNames(arg0: string, arg1: number, arg2: TimeZoneGenericNames$GenericNameType[]): TimeZoneNames$MatchInfo[];
    // private formatGenericNonLocationName(arg0: TimeZone, arg1: TimeZoneGenericNames$GenericNameType, arg2: number): string;
    // private formatPattern(arg0: TimeZoneGenericNames$Pattern, arg1: string[]): string;
    freeze(): TimeZoneGenericNames;
    getDisplayName(arg0: TimeZone, arg1: TimeZoneGenericNames$GenericNameType, arg2: number): string;
    getGenericLocationName(arg0: string): string;
    // private getLocaleDisplayNames(): LocaleDisplayNames;
    // private getPartialLocationName(arg0: string, arg1: string, arg2: boolean, arg3: string): string;
    // private getTargetRegion(): string;
    // private init(): void;
    isFrozen(): boolean;
    // private loadStrings(arg0: string): void;
    // private readObject(arg0: ObjectInputStream): void;
    setFormatPattern(arg0: TimeZoneGenericNames$Pattern, arg1: string): TimeZoneGenericNames;
}
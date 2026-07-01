import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { WeakReference } from '../../../../../../../java/lang/ref/WeakReference.d.ts'
import type { MessageFormat } from '../../../../../../../java/text/MessageFormat.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TextTrieMap } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TextTrieMap.d.ts'
import type { TimeZoneGenericNames$GenericMatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$GenericMatchInfo.d.ts'
import type { TimeZoneGenericNames$GenericNameType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$GenericNameType.d.ts'
import type { TimeZoneGenericNames$NameInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$NameInfo.d.ts'
import type { TimeZoneGenericNames$Pattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/TimeZoneGenericNames$Pattern.d.ts'
import type { LocaleDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/LocaleDisplayNames.d.ts'
import type { TimeZoneNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames.d.ts'
import type { TimeZoneNames$MatchInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeZoneNames$MatchInfo.d.ts'
import type { Freezable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Freezable.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class TimeZoneGenericNames extends Object implements Serializable, Freezable<TimeZoneGenericNames> {
    static getInstance(paramlocale: ULocale): TimeZoneGenericNames;
    constructor(locale: ULocale, tznames: TimeZoneNames)
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
    // private createGenericMatchInfo(matchInfo: TimeZoneNames$MatchInfo): TimeZoneGenericNames$GenericMatchInfo;
    find(text: string, start: number, genericTypes: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo[];
    findBestMatch(text: string, start: number, genericTypes: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo;
    // private findLocal(text: string, start: number, types: TimeZoneGenericNames$GenericNameType[]): TimeZoneGenericNames$GenericMatchInfo[];
    // private findTimeZoneNames(text: string, start: number, types: TimeZoneGenericNames$GenericNameType[]): TimeZoneNames$MatchInfo[];
    // private formatGenericNonLocationName(tz: TimeZone, type: TimeZoneGenericNames$GenericNameType, date: number): string;
    // private formatPattern(pat: TimeZoneGenericNames$Pattern, args: string[]): string;
    freeze(): TimeZoneGenericNames;
    getDisplayName(tz: TimeZone, type: TimeZoneGenericNames$GenericNameType, date: number): string;
    getGenericLocationName(canonicalTzID: string): string;
    // private getLocaleDisplayNames(): LocaleDisplayNames;
    // private getPartialLocationName(tzID: string, mzID: string, isLong: boolean, mzDisplayName: string): string;
    // private getTargetRegion(): string;
    // private init(): void;
    isFrozen(): boolean;
    // private loadStrings(tzCanonicalID: string): void;
    // private readObject(in_: ObjectInputStream): void;
    setFormatPattern(patType: TimeZoneGenericNames$Pattern, patStr: string): TimeZoneGenericNames;
}
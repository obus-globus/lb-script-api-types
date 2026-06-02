import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { ListFormat$Style } from '../../../../java/text/ListFormat$Style.d.ts'
import type { ListFormat$Type } from '../../../../java/text/ListFormat$Type.d.ts'
import type { NumberFormat$Style } from '../../../../java/text/NumberFormat$Style.d.ts'
import type { Calendar } from '../../../../java/util/Calendar.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LocaleProviderAdapter$Type } from '../../../../sun/util/locale/provider/LocaleProviderAdapter$Type.d.ts'
import type { LocaleResources$ResourceReference } from '../../../../sun/util/locale/provider/LocaleResources$ResourceReference.d.ts'
import type { ResourceBundleBasedAdapter } from '../../../../sun/util/locale/provider/ResourceBundleBasedAdapter.d.ts'
import type { LocaleData } from '../../../../sun/util/resources/LocaleData.d.ts'
export class LocaleResources extends Object {
    static trace(paramarg0: string, paramarg1: (Object | null)[]): void;
    constructor(arg0: ResourceBundleBasedAdapter, arg1: Locale)
    // private CPattern: string;
    // private cache: { [key: string]: LocaleResources$ResourceReference };
    // private jPattern: string;
    // private locale: Locale;
    // private localeData: LocaleData;
    // private referenceQueue: ReferenceQueue<Object>;
    // private type: LocaleProviderAdapter$Type;
    getBreakIteratorInfo(arg0: string): Object;
    getBreakIteratorResources(arg0: string): number[];
    getCNPatterns(arg0: NumberFormat$Style): string[];
    getCalendarData(arg0: string): string;
    getCalendarNames(arg0: string): string[];
    getCollationData(): string;
    getCurrencyName(arg0: string): string;
    getDateTimePattern(arg0: number, arg1: number, arg2: Calendar): string;
    // private getDateTimePattern(arg0: string, arg1: number, arg2: number, arg3: string): string;
    // private getDateTimePattern(arg0: string, arg1: string, arg2: number, arg3: string): string;
    getDecimalFormatSymbolsData(): Object[];
    getJavaTimeDateTimePattern(arg0: number, arg1: number, arg2: string): string;
    getJavaTimeFormatData(): ResourceBundle;
    getJavaTimeNames(arg0: string): string[];
    getListPatterns(arg0: ListFormat$Type, arg1: ListFormat$Style): string[];
    getLocaleName(arg0: string): string;
    getLocalizedPattern(arg0: string, arg1: string): string;
    // private getLocalizedPatternImpl(arg0: string, arg1: string): string;
    getNumberPatterns(): string[];
    // private getNumberStrings(arg0: ResourceBundle, arg1: string): string[];
    getRules(): string[];
    getTimeZoneNames(arg0: string): Object;
    getZoneIDs(): string[];
    getZoneStrings(): string[][];
    // private initSkeletonIfNeeded(): void;
    // private matchSkeleton(arg0: string, arg1: string): string;
    // private possibleInferred(arg0: string): Stream<string>;
    // private priorityList(arg0: string, arg1: string, arg2: string): string[];
    // private removeEmptyReferences(): void;
    // private resolveInputSkeleton(arg0: string): string;
    // private substituteInputSkeletons(arg0: string): string;
}
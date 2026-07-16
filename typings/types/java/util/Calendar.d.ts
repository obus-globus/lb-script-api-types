import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { DateFormatSymbols } from '../../java/text/DateFormatSymbols.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { Date } from '../../java/util/Date.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { TimeZone } from '../../java/util/TimeZone.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export abstract class Calendar extends Object implements Serializable, Cloneable, Comparable<Calendar> {
    static ALL_STYLES: number;
    static AM: number;
    static AM_PM: number;
    static APRIL: number;
    static AUGUST: number;
    static DATE: number;
    static DAY_OF_MONTH: number;
    static DAY_OF_WEEK: number;
    static DAY_OF_WEEK_IN_MONTH: number;
    static DAY_OF_YEAR: number;
    static DECEMBER: number;
    static DST_OFFSET: number;
    static ERA: number;
    static FEBRUARY: number;
    static FIELD_COUNT: number;
    static FRIDAY: number;
    static HOUR: number;
    static HOUR_OF_DAY: number;
    static JANUARY: number;
    static JULY: number;
    static JUNE: number;
    static LONG: number;
    static LONG_FORMAT: number;
    static LONG_STANDALONE: number;
    static MARCH: number;
    static MAY: number;
    static MILLISECOND: number;
    static MINUTE: number;
    static MONDAY: number;
    static MONTH: number;
    static NARROW_FORMAT: number;
    static NARROW_STANDALONE: number;
    static NOVEMBER: number;
    static OCTOBER: number;
    static PM: number;
    static SATURDAY: number;
    static SECOND: number;
    static SEPTEMBER: number;
    static SHORT: number;
    static SHORT_FORMAT: number;
    static SHORT_STANDALONE: number;
    static SUNDAY: number;
    static THURSDAY: number;
    static TUESDAY: number;
    static UNDECIMBER: number;
    static WEDNESDAY: number;
    static WEEK_OF_MONTH: number;
    static WEEK_OF_YEAR: number;
    static YEAR: number;
    static ZONE_OFFSET: number;
    static getAvailableCalendarTypes(): string[];
    static getAvailableLocales(): Locale[];
    static getInstance(): Calendar;
    static getInstance(paramarg0: Locale): Calendar;
    static getInstance(paramarg0: TimeZone): Calendar;
    static getInstance(paramarg0: TimeZone, paramarg1: Locale): Calendar;
    constructor()
    constructor(arg0: TimeZone, arg1: Locale)
    // private areAllFieldsSet: boolean;
    // private areFieldsSet: boolean;
    // private fields: number[];
    readonly firstDayOfWeek: number;
    // private isSet: boolean[];
    // private isTimeSet: boolean;
    readonly lenient: boolean;
    readonly minimalDaysInFirstWeek: number;
    // private nextStamp: number;
    // private serialVersionOnStream: number;
    // private sharedZone: boolean;
    // private stamp: number[];
    time: number;
    // private zone: TimeZone;
    add(arg0: number, arg1: number): void;
    // private adjustStamp(): void;
    after(arg0: Object): boolean;
    before(arg0: Object): boolean;
    checkDisplayNameParams(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Locale, arg5: number): boolean;
    clear(): void;
    clear(arg0: number): void;
    clone(): Object;
    compareTo(arg0: Calendar): number;
    // private compareTo(arg0: number): number;
    complete(): void;
    computeFields(): void;
    computeTime(): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getActualMaximum(arg0: number): number;
    getActualMinimum(arg0: number): number;
    getBaseStyle(arg0: number): number;
    getCalendarType(): string;
    getDisplayName(arg0: number, arg1: number, arg2: Locale): string;
    getDisplayNames(arg0: number, arg1: number, arg2: Locale): { [key: string]: number };
    // private getDisplayNamesImpl(arg0: number, arg1: number, arg2: Locale): { [key: string]: number };
    // private getFieldStrings(arg0: number, arg1: number, arg2: DateFormatSymbols): string[];
    getFirstDayOfWeek(): number;
    getGreatestMinimum(arg0: number): number;
    getLeastMaximum(arg0: number): number;
    getMaximum(arg0: number): number;
    getMinimalDaysInFirstWeek(): number;
    getMinimum(arg0: number): number;
    getSetStateFields(): number;
    getTime(): Date;
    getTimeInMillis(): number;
    getTimeZone(): TimeZone;
    getWeekYear(): number;
    getWeeksInWeekYear(): number;
    getZone(): TimeZone;
    hashCode(): number;
    internalGet(arg0: number): number;
    internalSet(arg0: number, arg1: number): void;
    // private invalidateWeekFields(): void;
    isExternallySet(arg0: number): boolean;
    isFullyNormalized(): boolean;
    isLenient(): boolean;
    // private isNarrowFormatStyle(arg0: number): boolean;
    // private isNarrowStyle(arg0: number): boolean;
    isPartiallyNormalized(): boolean;
    isSet(arg0: number): boolean;
    // private isStandaloneStyle(arg0: number): boolean;
    isWeekDateSupported(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    roll(arg0: number, arg1: boolean): void;
    roll(arg0: number, arg1: number): void;
    selectFields(): number;
    set(arg0: number, arg1: number): void;
    set(arg0: number, arg1: number, arg2: number): void;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    setFieldsComputed(arg0: number): void;
    setFieldsNormalized(arg0: number): void;
    setFirstDayOfWeek(arg0: number): void;
    setLenient(arg0: boolean): void;
    setMinimalDaysInFirstWeek(arg0: number): void;
    setTime(arg0: Date): void;
    setTimeInMillis(arg0: number): void;
    setTimeZone(arg0: TimeZone): void;
    setUnnormalized(): void;
    // private setWeekCountData(arg0: Locale): void;
    setWeekDate(arg0: number, arg1: number, arg2: number): void;
    setZoneShared(arg0: boolean): void;
    toInstant(): Instant;
    // private toStandaloneStyle(arg0: number): number;
    toString(): string;
    // private updateTime(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class DateFormatSymbols extends Object implements Serializable, Cloneable {
    static getAvailableLocales(): (Object | null)[];
    static getInstance(): DateFormatSymbols;
    static getInstance(paramarg0: Locale): DateFormatSymbols;
    constructor()
    constructor(arg0: Locale)
    // private ampms: string[];
    // private cachedHashCode: number;
    eras: string[];
    // private isZoneStringsSet: boolean;
    // private lastZoneIndex: number;
    localPatternChars: string;
    // private locale: Locale;
    months: string[];
    shortMonths: string[];
    shortWeekdays: string[];
    weekdays: string[];
    zoneStrings: string[][];
    clone(): Object;
    // private copyMembers(arg0: DateFormatSymbols, arg1: DateFormatSymbols): void;
    equals(arg0: Object | null): boolean;
    getAmPmStrings(): string[];
    getEras(): string[];
    getLocalPatternChars(): string;
    getMonths(): string[];
    getShortMonths(): string[];
    getShortWeekdays(): string[];
    getWeekdays(): string[];
    getZoneIndex(arg0: string): number;
    getZoneStrings(): string[][];
    // private getZoneStringsImpl(arg0: boolean): string[][];
    getZoneStringsWrapper(): string[][];
    hashCode(): number;
    // private initializeData(arg0: Locale): void;
    // private isSubclassObject(): boolean;
    setAmPmStrings(arg0: string[]): void;
    setEras(arg0: string[]): void;
    setLocalPatternChars(arg0: string): void;
    setMonths(arg0: string[]): void;
    setShortMonths(arg0: string[]): void;
    setShortWeekdays(arg0: string[]): void;
    setWeekdays(arg0: string[]): void;
    setZoneStrings(arg0: string[][]): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
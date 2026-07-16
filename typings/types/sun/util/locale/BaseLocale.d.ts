import type { Object } from '../../../java/lang/Object.d.ts'
export class BaseLocale extends Object {
    static CANADA: number;
    static CANADA_FRENCH: number;
    static CHINESE: number;
    static ENGLISH: number;
    static FRANCE: number;
    static FRENCH: number;
    static GERMAN: number;
    static GERMANY: number;
    static ITALIAN: number;
    static ITALY: number;
    static JAPAN: number;
    static JAPANESE: number;
    static KOREA: number;
    static KOREAN: number;
    static NUM_CONSTANTS: number;
    static ROOT: number;
    static SEP: string;
    static SIMPLIFIED_CHINESE: number;
    static TRADITIONAL_CHINESE: number;
    static UK: number;
    static US: number;
    static constantBaseLocales: BaseLocale[];
    static convertOldISOCodes(paramarg0: string): string;
    static getInstance(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string): BaseLocale;
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    // private hash: number;
    readonly language: string;
    readonly region: string;
    readonly script: string;
    readonly variant: string;
    equals(arg0: Object | null): boolean;
    getLanguage(): string;
    getRegion(): string;
    getScript(): string;
    getVariant(): string;
    hashCode(): number;
    toString(): string;
}
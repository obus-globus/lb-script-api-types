import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { LocaleData$MeasurementSystem } from '../../../../com/ibm/icu/util/LocaleData$MeasurementSystem.d.ts'
import type { LocaleData$PaperSize } from '../../../../com/ibm/icu/util/LocaleData$PaperSize.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { MissingResourceException } from '../../../../java/util/MissingResourceException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LocaleData extends Object {
    static ALT_QUOTATION_END: number;
    static ALT_QUOTATION_START: number;
    static DELIMITER_COUNT: number;
    static ES_AUXILIARY: number;
    static ES_COUNT: number;
    static ES_CURRENCY: number;
    static ES_INDEX: number;
    static ES_PUNCTUATION: number;
    static ES_STANDARD: number;
    static QUOTATION_END: number;
    static QUOTATION_START: number;
    static getCLDRVersion(): VersionInfo;
    static getExemplarSet(paramarg0: ULocale, paramarg1: number): string[];
    static getExemplarSet(paramarg0: ULocale, paramarg1: number, paramarg2: number): string[];
    static getInstance(): LocaleData;
    static getInstance(paramarg0: ULocale): LocaleData;
    static getMeasurementSystem(paramarg0: ULocale): LocaleData$MeasurementSystem;
    static getPaperSize(paramarg0: ULocale): LocaleData$PaperSize;
    private constructor()
    // private bundle: ICUResourceBundle;
    // private langBundle: ICUResourceBundle;
    // private langBundleException: MissingResourceException;
    readonly noSubstitute: boolean;
    getDelimiter(arg0: number): string;
    getExemplarSet(arg0: number, arg1: number): string[];
    getLocaleDisplayPattern(): string;
    getLocaleSeparator(): string;
    getNoSubstitute(): boolean;
    setNoSubstitute(arg0: boolean): void;
}
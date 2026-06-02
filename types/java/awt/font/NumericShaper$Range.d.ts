import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class NumericShaper$Range extends Enum<NumericShaper$Range> {
    static ARABIC: NumericShaper$Range;
    static BALINESE: NumericShaper$Range;
    static BENGALI: NumericShaper$Range;
    static CHAM: NumericShaper$Range;
    static DEVANAGARI: NumericShaper$Range;
    static EASTERN_ARABIC: NumericShaper$Range;
    static ETHIOPIC: NumericShaper$Range;
    static EUROPEAN: NumericShaper$Range;
    static GUJARATI: NumericShaper$Range;
    static GURMUKHI: NumericShaper$Range;
    static JAVANESE: NumericShaper$Range;
    static KANNADA: NumericShaper$Range;
    static KAYAH_LI: NumericShaper$Range;
    static KHMER: NumericShaper$Range;
    static LAO: NumericShaper$Range;
    static LEPCHA: NumericShaper$Range;
    static LIMBU: NumericShaper$Range;
    static MALAYALAM: NumericShaper$Range;
    static MEETEI_MAYEK: NumericShaper$Range;
    static MONGOLIAN: NumericShaper$Range;
    static MYANMAR: NumericShaper$Range;
    static MYANMAR_SHAN: NumericShaper$Range;
    static MYANMAR_TAI_LAING: NumericShaper$Range;
    static NEW_TAI_LUE: NumericShaper$Range;
    static NKO: NumericShaper$Range;
    static OL_CHIKI: NumericShaper$Range;
    static ORIYA: NumericShaper$Range;
    static SAURASHTRA: NumericShaper$Range;
    static SINHALA: NumericShaper$Range;
    static SUNDANESE: NumericShaper$Range;
    static TAI_THAM_HORA: NumericShaper$Range;
    static TAI_THAM_THAM: NumericShaper$Range;
    static TAMIL: NumericShaper$Range;
    static TELUGU: NumericShaper$Range;
    static THAI: NumericShaper$Range;
    static TIBETAN: NumericShaper$Range;
    static VAI: NumericShaper$Range;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NumericShaper$Range;
    static values(): (Object | null)[];
    private constructor(arg2: number, arg3: number, arg4: number)
    // private base: number;
    // private end: number;
    // private start: number;
    // private getDigitBase(): number;
    getNumericBase(): string;
    // private inRange(arg0: number): boolean;
    name(): "EUROPEAN" | "ARABIC" | "EASTERN_ARABIC" | "DEVANAGARI" | "BENGALI" | "GURMUKHI" | "GUJARATI" | "ORIYA" | "TAMIL" | "TELUGU" | "KANNADA" | "MALAYALAM" | "THAI" | "LAO" | "TIBETAN" | "MYANMAR" | "ETHIOPIC" | "KHMER" | "MONGOLIAN" | "NKO" | "MYANMAR_SHAN" | "LIMBU" | "NEW_TAI_LUE" | "BALINESE" | "SUNDANESE" | "LEPCHA" | "OL_CHIKI" | "VAI" | "SAURASHTRA" | "KAYAH_LI" | "CHAM" | "TAI_THAM_HORA" | "TAI_THAM_THAM" | "JAVANESE" | "MEETEI_MAYEK" | "SINHALA" | "MYANMAR_TAI_LAING";
}
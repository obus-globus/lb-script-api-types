import type { NumericShaper$Range } from '../../../java/awt/font/NumericShaper$Range.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NumericShaper extends Object implements Serializable {
    static ALL_RANGES: number;
    static ARABIC: number;
    static BENGALI: number;
    static DEVANAGARI: number;
    static EASTERN_ARABIC: number;
    static ETHIOPIC: number;
    static EUROPEAN: number;
    static GUJARATI: number;
    static GURMUKHI: number;
    static KANNADA: number;
    static KHMER: number;
    static LAO: number;
    static MALAYALAM: number;
    static MONGOLIAN: number;
    static MYANMAR: number;
    static ORIYA: number;
    static TAMIL: number;
    static TELUGU: number;
    static THAI: number;
    static TIBETAN: number;
    static getContextualShaper(paramarg0: number): NumericShaper;
    static getContextualShaper(paramarg0: number, paramarg1: number): NumericShaper;
    static getContextualShaper(paramarg0: NumericShaper$Range[]): NumericShaper;
    static getContextualShaper(paramarg0: NumericShaper$Range[], paramarg1: NumericShaper$Range): NumericShaper;
    static getShaper(paramarg0: number): NumericShaper;
    static getShaper(paramarg0: NumericShaper$Range): NumericShaper;
    private constructor(arg0: NumericShaper$Range, arg1: NumericShaper$Range[])
    private constructor(arg0: number, arg1: number)
    // private currentRange: NumericShaper$Range;
    // private key: number;
    // private mask: number;
    // private rangeArray: NumericShaper$Range[];
    readonly rangeSet: NumericShaper$Range[];
    // private shapingRange: NumericShaper$Range;
    // private stCache: number;
    // private checkParams(arg0: string[], arg1: number, arg2: number): void;
    equals(arg0: Object | null): boolean;
    getRangeSet(): NumericShaper$Range[];
    getRanges(): number;
    hashCode(): number;
    isContextual(): boolean;
    // private isStrongDirectional(arg0: string): boolean;
    // private rangeForCodePoint(arg0: number): NumericShaper$Range;
    shape(arg0: string[], arg1: number, arg2: number): void;
    shape(arg0: string[], arg1: number, arg2: number, arg3: NumericShaper$Range): void;
    shape(arg0: string[], arg1: number, arg2: number, arg3: number): void;
    // private shapeContextually(arg0: string[], arg1: number, arg2: number, arg3: NumericShaper$Range): void;
    // private shapeContextually(arg0: string[], arg1: number, arg2: number, arg3: number): void;
    // private shapeNonContextually(arg0: string[], arg1: number, arg2: number): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}
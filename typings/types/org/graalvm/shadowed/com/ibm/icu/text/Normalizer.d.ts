import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Normalizer$Mode } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer$Mode.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class Normalizer extends Object implements Cloneable {
    static COMPARE_CODE_POINT_ORDER: number;
    static COMPARE_IGNORE_CASE: number;
    static COMPARE_NORM_OPTIONS_SHIFT: number;
    static COMPOSE: Normalizer$Mode;
    static COMPOSE_COMPAT: Normalizer$Mode;
    static DECOMP: Normalizer$Mode;
    static DECOMP_COMPAT: Normalizer$Mode;
    static DEFAULT: Normalizer$Mode;
    static DONE: number;
    static FCD: Normalizer$Mode;
    static FOLD_CASE_DEFAULT: number;
    static FOLD_CASE_EXCLUDE_SPECIAL_I: number;
    static IGNORE_HANGUL: number;
    static INPUT_IS_FCD: number;
    static MAYBE: Normalizer$QuickCheckResult;
    static NFC: Normalizer$Mode;
    static NFD: Normalizer$Mode;
    static NFKC: Normalizer$Mode;
    static NFKD: Normalizer$Mode;
    static NO: Normalizer$QuickCheckResult;
    static NONE: Normalizer$Mode;
    static NO_OP: Normalizer$Mode;
    static UNICODE_3_2: number;
    static YES: Normalizer$QuickCheckResult;
    static compare(params1: string[], params2: string[], paramoptions: number): number;
    static compare(params1: string[], params1Start: number, params1Limit: number, params2: string[], params2Start: number, params2Limit: number, paramoptions: number): number;
    static compare(paramchar32a: number, paramchar32b: number, paramoptions: number): number;
    static compare(paramchar32a: number, paramstr2: string, paramoptions: number): number;
    static compare(params1: string, params2: string, paramoptions: number): number;
    static compose(paramsource: string[], paramtarget: string[], paramcompat: boolean, paramoptions: number): number;
    static compose(paramsrc: string[], paramsrcStart: number, paramsrcLimit: number, paramdest: string[], paramdestStart: number, paramdestLimit: number, paramcompat: boolean, paramoptions: number): number;
    static compose(paramstr: string, paramcompat: boolean): string;
    static compose(paramstr: string, paramcompat: boolean, paramoptions: number): string;
    static concatenate(paramleft: string[], paramleftStart: number, paramleftLimit: number, paramright: string[], paramrightStart: number, paramrightLimit: number, paramdest: string[], paramdestStart: number, paramdestLimit: number, parammode: Normalizer$Mode, paramoptions: number): number;
    static concatenate(paramleft: string[], paramright: string[], parammode: Normalizer$Mode, paramoptions: number): string;
    static concatenate(paramleft: string, paramright: string, parammode: Normalizer$Mode, paramoptions: number): string;
    static decompose(paramsource: string[], paramtarget: string[], paramcompat: boolean, paramoptions: number): number;
    static decompose(paramsrc: string[], paramsrcStart: number, paramsrcLimit: number, paramdest: string[], paramdestStart: number, paramdestLimit: number, paramcompat: boolean, paramoptions: number): number;
    static decompose(paramstr: string, paramcompat: boolean): string;
    static decompose(paramstr: string, paramcompat: boolean, paramoptions: number): string;
    static getFC_NFKC_Closure(paramc: number, paramdest: string[]): number;
    static getFC_NFKC_Closure(paramc: number): string;
    static isNormalized(paramsrc: string[], paramstart: number, paramlimit: number, parammode: Normalizer$Mode, paramoptions: number): boolean;
    static isNormalized(paramchar32: number, parammode: Normalizer$Mode, paramoptions: number): boolean;
    static isNormalized(paramstr: string, parammode: Normalizer$Mode, paramoptions: number): boolean;
    static normalize(paramsource: string[], paramtarget: string[], parammode: Normalizer$Mode, paramoptions: number): number;
    static normalize(paramsrc: string[], paramsrcStart: number, paramsrcLimit: number, paramdest: string[], paramdestStart: number, paramdestLimit: number, parammode: Normalizer$Mode, paramoptions: number): number;
    static normalize(paramchar32: number, parammode: Normalizer$Mode): string;
    static normalize(paramchar32: number, parammode: Normalizer$Mode, paramoptions: number): string;
    static normalize(paramsrc: string, parammode: Normalizer$Mode): string;
    static normalize(paramstr: string, parammode: Normalizer$Mode, paramoptions: number): string;
    static quickCheck(paramsource: string[], paramstart: number, paramlimit: number, parammode: Normalizer$Mode, paramoptions: number): Normalizer$QuickCheckResult;
    static quickCheck(paramsource: string[], parammode: Normalizer$Mode, paramoptions: number): Normalizer$QuickCheckResult;
    static quickCheck(paramsource: string, parammode: Normalizer$Mode): Normalizer$QuickCheckResult;
    static quickCheck(paramsource: string, parammode: Normalizer$Mode, paramoptions: number): Normalizer$QuickCheckResult;
    constructor(iter: CharacterIterator, mode: Normalizer$Mode, opt: number)
    constructor(str: string, mode: Normalizer$Mode, opt: number)
    constructor(iter: UCharacterIterator, mode: Normalizer$Mode, options: number)
    // private buffer: StringBuilder;
    // private bufferPos: number;
    // private currentIndex: number;
    readonly mode: Normalizer$Mode;
    // private nextIndex: number;
    // private norm2: Normalizer2;
    // private options: number;
    readonly text: UCharacterIterator;
    // private clearBuffer(): void;
    protected clone(): Object;
    clone(): Object;
    current(): number;
    endIndex(): number;
    first(): number;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    getLength(): number;
    getMode(): Normalizer$Mode;
    getOption(option: number): number;
    getText(): string;
    getText(fillIn: string[]): number;
    last(): number;
    next(): number;
    // private nextNormalize(): boolean;
    previous(): number;
    // private previousNormalize(): boolean;
    reset(): void;
    setIndex(index: number): number;
    setIndexOnly(index: number): void;
    setMode(newMode: Normalizer$Mode): void;
    setOption(option: number, value: boolean): void;
    setText(newText: StringBuffer): void;
    setText(newText: CharacterIterator): void;
    setText(newText: string[]): void;
    setText(newText: string): void;
    setText(newText: UCharacterIterator): void;
    startIndex(): number;
}
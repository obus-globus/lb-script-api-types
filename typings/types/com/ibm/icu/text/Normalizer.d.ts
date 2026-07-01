import type { Normalizer$Mode } from '../../../../com/ibm/icu/text/Normalizer$Mode.d.ts'
import type { Normalizer$QuickCheckResult } from '../../../../com/ibm/icu/text/Normalizer$QuickCheckResult.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
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
    static compare(paramarg0: string[], paramarg1: string[], paramarg2: number): number;
    static compare(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: string[], paramarg4: number, paramarg5: number, paramarg6: number): number;
    static compare(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static compare(paramarg0: number, paramarg1: string, paramarg2: number): number;
    static compare(paramarg0: string, paramarg1: string, paramarg2: number): number;
    static compose(paramarg0: string[], paramarg1: string[], paramarg2: boolean, paramarg3: number): number;
    static compose(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: string[], paramarg4: number, paramarg5: number, paramarg6: boolean, paramarg7: number): number;
    static compose(paramarg0: string, paramarg1: boolean): string;
    static compose(paramarg0: string, paramarg1: boolean, paramarg2: number): string;
    static concatenate(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: string[], paramarg4: number, paramarg5: number, paramarg6: string[], paramarg7: number, paramarg8: number, paramarg9: Normalizer$Mode, paramarg10: number): number;
    static concatenate(paramarg0: string[], paramarg1: string[], paramarg2: Normalizer$Mode, paramarg3: number): string;
    static concatenate(paramarg0: string, paramarg1: string, paramarg2: Normalizer$Mode, paramarg3: number): string;
    static decompose(paramarg0: string[], paramarg1: string[], paramarg2: boolean, paramarg3: number): number;
    static decompose(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: string[], paramarg4: number, paramarg5: number, paramarg6: boolean, paramarg7: number): number;
    static decompose(paramarg0: string, paramarg1: boolean): string;
    static decompose(paramarg0: string, paramarg1: boolean, paramarg2: number): string;
    static getFC_NFKC_Closure(paramarg0: number, paramarg1: string[]): number;
    static getFC_NFKC_Closure(paramarg0: number): string;
    static isNormalized(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: Normalizer$Mode, paramarg4: number): boolean;
    static isNormalized(paramarg0: number, paramarg1: Normalizer$Mode, paramarg2: number): boolean;
    static isNormalized(paramarg0: string, paramarg1: Normalizer$Mode, paramarg2: number): boolean;
    static normalize(paramarg0: string[], paramarg1: string[], paramarg2: Normalizer$Mode, paramarg3: number): number;
    static normalize(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: string[], paramarg4: number, paramarg5: number, paramarg6: Normalizer$Mode, paramarg7: number): number;
    static normalize(paramarg0: number, paramarg1: Normalizer$Mode): string;
    static normalize(paramarg0: number, paramarg1: Normalizer$Mode, paramarg2: number): string;
    static normalize(paramarg0: string, paramarg1: Normalizer$Mode): string;
    static normalize(paramarg0: string, paramarg1: Normalizer$Mode, paramarg2: number): string;
    static quickCheck(paramarg0: string[], paramarg1: Normalizer$Mode, paramarg2: number): Normalizer$QuickCheckResult;
    static quickCheck(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: Normalizer$Mode, paramarg4: number): Normalizer$QuickCheckResult;
    static quickCheck(paramarg0: string, paramarg1: Normalizer$Mode): Normalizer$QuickCheckResult;
    static quickCheck(paramarg0: string, paramarg1: Normalizer$Mode, paramarg2: number): Normalizer$QuickCheckResult;
    constructor(arg0: UCharacterIterator, arg1: Normalizer$Mode, arg2: number)
    constructor(arg0: CharacterIterator, arg1: Normalizer$Mode, arg2: number)
    constructor(arg0: string, arg1: Normalizer$Mode, arg2: number)
    // private buffer: StringBuilder;
    // private bufferPos: number;
    // private currentIndex: number;
    readonly mode: Normalizer$Mode;
    // private nextIndex: number;
    // private norm2: Normalizer2;
    // private options: number;
    readonly text: UCharacterIterator;
    // private clearBuffer(): void;
    clone(): Normalizer;
    current(): number;
    endIndex(): number;
    first(): number;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    getLength(): number;
    getMode(): Normalizer$Mode;
    getOption(arg0: number): number;
    getText(): string;
    getText(arg0: string[]): number;
    last(): number;
    next(): number;
    // private nextNormalize(): boolean;
    previous(): number;
    // private previousNormalize(): boolean;
    reset(): void;
    setIndex(arg0: number): number;
    setIndexOnly(arg0: number): void;
    setMode(arg0: Normalizer$Mode): void;
    setOption(arg0: number, arg1: boolean): void;
    setText(arg0: UCharacterIterator): void;
    setText(arg0: StringBuffer): void;
    setText(arg0: CharacterIterator): void;
    setText(arg0: string[]): void;
    setText(arg0: string): void;
    startIndex(): number;
}
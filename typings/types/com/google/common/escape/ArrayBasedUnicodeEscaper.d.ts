import type { ArrayBasedEscaperMap } from '../../../../com/google/common/escape/ArrayBasedEscaperMap.d.ts'
import type { UnicodeEscaper } from '../../../../com/google/common/escape/UnicodeEscaper.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class ArrayBasedUnicodeEscaper extends UnicodeEscaper {
    constructor(escaperMap: ArrayBasedEscaperMap, safeMin: number, safeMax: number, unsafeReplacement: string)
    constructor(replacementMap: { [key: string]: string }, safeMin: number, safeMax: number, unsafeReplacement: string)
    // private replacements: string[][];
    // private replacementsLength: number;
    // private safeMax: number;
    // private safeMaxChar: string;
    // private safeMin: number;
    // private safeMinChar: string;
    escape(cp: number): string[];
    escape(s: string): string;
    escapeUnsafe(cp: number): string[];
    nextEscapeIndex(csq: CharSequence, index: number, end: number): number;
}
import type { ArrayBasedEscaperMap } from '../../../../com/google/common/escape/ArrayBasedEscaperMap.d.ts'
import type { CharEscaper } from '../../../../com/google/common/escape/CharEscaper.d.ts'
export abstract class ArrayBasedCharEscaper extends CharEscaper {
    constructor(escaperMap: ArrayBasedEscaperMap, safeMin: string, safeMax: string)
    constructor(replacementMap: { [key: string]: string }, safeMin: string, safeMax: string)
    // private replacements: string[][];
    // private replacementsLength: number;
    // private safeMax: string;
    // private safeMin: string;
    escape(c: string): string[];
    escape(s: string): string;
    escapeUnsafe(c: string): string[];
}
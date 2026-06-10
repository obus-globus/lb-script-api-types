import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharSpliterators$ArraySpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterators$ArraySpliterator.d.ts'
export class CharSpliterators$ArraySpliteratorWithComparator extends CharSpliterators$ArraySpliterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: (param0: string, param1: string) => number)
    readonly comparator: (param0: string, param1: string) => number;
    getComparator(): (param0: string, param1: string) => number;
    makeForSplit(arg0: number, arg1: number): CharSpliterators$ArraySpliteratorWithComparator;
}
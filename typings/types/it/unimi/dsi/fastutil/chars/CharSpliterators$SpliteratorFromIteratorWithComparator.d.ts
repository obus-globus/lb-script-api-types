import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { CharSpliterators$SpliteratorFromIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterators$SpliteratorFromIterator.d.ts'
export class CharSpliterators$SpliteratorFromIteratorWithComparator extends CharSpliterators$SpliteratorFromIterator {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: CharIterator, arg1: number, arg2: (param0: string, param1: string) => number)
    constructor(arg0: CharIterator, arg1: number, arg2: number, arg3: (param0: string, param1: string) => number)
    readonly comparator: (param0: string, param1: string) => number;
    getComparator(): (param0: string, param1: string) => number;
    makeForSplit(arg0: string[], arg1: number): CharSpliterator;
}
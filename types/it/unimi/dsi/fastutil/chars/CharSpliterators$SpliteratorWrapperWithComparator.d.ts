import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { CharSpliterators$SpliteratorWrapper } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterators$SpliteratorWrapper.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
export class CharSpliterators$SpliteratorWrapperWithComparator extends CharSpliterators$SpliteratorWrapper {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: Spliterator<string>, arg1: (param0: string, param1: string) => kotlin.Int)
    readonly comparator: (param0: string, param1: string) => kotlin.Int;
    getComparator(): (param0: string, param1: string) => kotlin.Int;
    trySplit(): CharSpliterator;
}
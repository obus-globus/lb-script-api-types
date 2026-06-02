import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { Spliterators$AbstractSpliterator } from '../../../../../java/util/Spliterators$AbstractSpliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Streams$EnumerationSpliterator<T extends Object | number | string | boolean> extends Spliterators$AbstractSpliterator<T> {
    static CONCURRENT: number;
    static DISTINCT: number;
    static IMMUTABLE: number;
    static NONNULL: number;
    static ORDERED: number;
    static SIZED: number;
    static SORTED: number;
    static SUBSIZED: number;
    constructor(arg0: number, arg1: number, arg2: Enumeration<T>)
    // private enumeration: Enumeration<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    // private next(arg0: (param0: T) => void): boolean;
    tryAdvance(arg0: (param0: T) => void): boolean;
}
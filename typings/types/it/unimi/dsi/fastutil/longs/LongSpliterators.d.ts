import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongIterator.d.ts'
import type { LongSpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterator.d.ts'
import type { LongSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongSpliterators$EmptySpliterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { LongConsumer } from '../../../../../java/util/function/LongConsumer.d.ts'
import type { LongPredicate } from '../../../../../java/util/function/LongPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: LongSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asIterator(paramarg0: LongSpliterator): LongIterator;
    static asLongSpliterator(paramarg0: Spliterator<Object>): LongSpliterator;
    static asLongSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): LongSpliterator;
    static asSpliterator(paramarg0: LongIterator, paramarg1: number, paramarg2: number): LongSpliterator;
    static asSpliteratorFromSorted(paramarg0: LongIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): LongSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: LongIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): LongSpliterator;
    static asSpliteratorUnknownSize(paramarg0: LongIterator, paramarg1: number): LongSpliterator;
    static concat(...paramarg0: LongSpliterator[]): LongSpliterator;
    static concat(paramarg0: LongSpliterator[], paramarg1: number, paramarg2: number): LongSpliterator;
    static fromTo(paramarg0: number, paramarg1: number): LongSpliterator;
    static onEachMatching(paramarg0: LongSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): LongSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): LongSpliterator;
    static wrap(paramarg0: ByteSpliterator): LongSpliterator;
    static wrap(paramarg0: CharSpliterator): LongSpliterator;
    static wrap(paramarg0: IntSpliterator): LongSpliterator;
    static wrap(paramarg0: ShortSpliterator): LongSpliterator;
    static wrap(paramarg0: number[]): LongSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): LongSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): LongSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): LongSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): LongSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): LongSpliterator;
    private constructor()
}
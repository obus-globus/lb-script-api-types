import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { IntSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterators$EmptySpliterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: IntSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asIntSpliterator(paramarg0: Spliterator<Object>): IntSpliterator;
    static asIntSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): IntSpliterator;
    static asIterator(paramarg0: IntSpliterator): IntIterator;
    static asSpliterator(paramarg0: IntIterator, paramarg1: number, paramarg2: number): IntSpliterator;
    static asSpliteratorFromSorted(paramarg0: IntIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): IntSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: IntIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): IntSpliterator;
    static asSpliteratorUnknownSize(paramarg0: IntIterator, paramarg1: number): IntSpliterator;
    static concat(...paramarg0: IntSpliterator[]): IntSpliterator;
    static concat(paramarg0: IntSpliterator[], paramarg1: number, paramarg2: number): IntSpliterator;
    static fromTo(paramarg0: number, paramarg1: number): IntSpliterator;
    static onEachMatching(paramarg0: IntSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): IntSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): IntSpliterator;
    static wrap(paramarg0: number[]): IntSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): IntSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): IntSpliterator;
    static wrap(paramarg0: ByteSpliterator): IntSpliterator;
    static wrap(paramarg0: CharSpliterator): IntSpliterator;
    static wrap(paramarg0: ShortSpliterator): IntSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): IntSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): IntSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): IntSpliterator;
    private constructor()
}
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteConsumer } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteConsumer.d.ts'
import type { ByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIterator.d.ts'
import type { BytePredicate } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePredicate.d.ts'
import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { ByteSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterators$EmptySpliterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: ByteSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asByteSpliterator(paramarg0: Spliterator<Object>): ByteSpliterator;
    static asByteSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): ByteSpliterator;
    static asIterator(paramarg0: ByteSpliterator): ByteIterator;
    static asSpliterator(paramarg0: ByteIterator, paramarg1: number, paramarg2: number): ByteSpliterator;
    static asSpliteratorFromSorted(paramarg0: ByteIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): ByteSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: ByteIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): ByteSpliterator;
    static asSpliteratorUnknownSize(paramarg0: ByteIterator, paramarg1: number): ByteSpliterator;
    static concat(...paramarg0: ByteSpliterator[]): ByteSpliterator;
    static concat(paramarg0: ByteSpliterator[], paramarg1: number, paramarg2: number): ByteSpliterator;
    static fromTo(paramarg0: number, paramarg1: number): ByteSpliterator;
    static narrow(paramarg0: Spliterator$OfInt): ByteSpliterator;
    static onEachMatching(paramarg0: ByteSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): ByteSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): ByteSpliterator;
    static widen(paramarg0: ByteSpliterator): IntSpliterator;
    static wrap(paramarg0: number[]): ByteSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ByteSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): ByteSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): ByteSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): ByteSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): ByteSpliterator;
    private constructor()
}
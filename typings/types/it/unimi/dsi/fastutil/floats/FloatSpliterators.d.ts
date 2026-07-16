import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatConsumer } from '../../../../../it/unimi/dsi/fastutil/floats/FloatConsumer.d.ts'
import type { FloatIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatIterator.d.ts'
import type { FloatPredicate } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPredicate.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { FloatSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterators$EmptySpliterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfDouble } from '../../../../../java/util/Spliterator$OfDouble.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { DoublePredicate } from '../../../../../java/util/function/DoublePredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: FloatSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asFloatSpliterator(paramarg0: Spliterator<Object>): FloatSpliterator;
    static asFloatSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): FloatSpliterator;
    static asIterator(paramarg0: FloatSpliterator): FloatIterator;
    static asSpliterator(paramarg0: FloatIterator, paramarg1: number, paramarg2: number): FloatSpliterator;
    static asSpliteratorFromSorted(paramarg0: FloatIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): FloatSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: FloatIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): FloatSpliterator;
    static asSpliteratorUnknownSize(paramarg0: FloatIterator, paramarg1: number): FloatSpliterator;
    static concat(...paramarg0: FloatSpliterator[]): FloatSpliterator;
    static concat(paramarg0: FloatSpliterator[], paramarg1: number, paramarg2: number): FloatSpliterator;
    static narrow(paramarg0: Spliterator$OfDouble): FloatSpliterator;
    static onEachMatching(paramarg0: FloatSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): FloatSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): FloatSpliterator;
    static widen(paramarg0: FloatSpliterator): DoubleSpliterator;
    static wrap(paramarg0: number[]): FloatSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): FloatSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): FloatSpliterator;
    static wrap(paramarg0: ByteSpliterator): FloatSpliterator;
    static wrap(paramarg0: CharSpliterator): FloatSpliterator;
    static wrap(paramarg0: ShortSpliterator): FloatSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): FloatSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): FloatSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): FloatSpliterator;
    private constructor()
}
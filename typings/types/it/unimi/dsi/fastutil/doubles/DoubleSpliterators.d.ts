import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleIterator.d.ts'
import type { DoubleSpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterator.d.ts'
import type { DoubleSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleSpliterators$EmptySpliterator.d.ts'
import type { FloatSpliterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatSpliterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { DoubleConsumer } from '../../../../../java/util/function/DoubleConsumer.d.ts'
import type { DoublePredicate } from '../../../../../java/util/function/DoublePredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: DoubleSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asDoubleSpliterator(paramarg0: Spliterator<Object>): DoubleSpliterator;
    static asDoubleSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): DoubleSpliterator;
    static asIterator(paramarg0: DoubleSpliterator): DoubleIterator;
    static asSpliterator(paramarg0: DoubleIterator, paramarg1: number, paramarg2: number): DoubleSpliterator;
    static asSpliteratorFromSorted(paramarg0: DoubleIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): DoubleSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: DoubleIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): DoubleSpliterator;
    static asSpliteratorUnknownSize(paramarg0: DoubleIterator, paramarg1: number): DoubleSpliterator;
    static concat(...paramarg0: (Object | null)[]): DoubleSpliterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): DoubleSpliterator;
    static onEachMatching(paramarg0: DoubleSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): DoubleSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): DoubleSpliterator;
    static wrap(paramarg0: number[]): DoubleSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): DoubleSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): DoubleSpliterator;
    static wrap(paramarg0: ByteSpliterator): DoubleSpliterator;
    static wrap(paramarg0: CharSpliterator): DoubleSpliterator;
    static wrap(paramarg0: FloatSpliterator): DoubleSpliterator;
    static wrap(paramarg0: IntSpliterator): DoubleSpliterator;
    static wrap(paramarg0: ShortSpliterator): DoubleSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): DoubleSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): DoubleSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): DoubleSpliterator;
    private constructor()
}
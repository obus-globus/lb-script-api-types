import type { ByteSpliterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteSpliterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortConsumer } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortConsumer.d.ts'
import type { ShortIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIterator.d.ts'
import type { ShortPredicate } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPredicate.d.ts'
import type { ShortSpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterator.d.ts'
import type { ShortSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortSpliterators$EmptySpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: ShortSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asIterator(paramarg0: ShortSpliterator): ShortIterator;
    static asShortSpliterator(paramarg0: Spliterator<Object>): ShortSpliterator;
    static asShortSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: number, param1: number) => number): ShortSpliterator;
    static asSpliterator(paramarg0: ShortIterator, paramarg1: number, paramarg2: number): ShortSpliterator;
    static asSpliteratorFromSorted(paramarg0: ShortIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): ShortSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: ShortIterator, paramarg1: number, paramarg2: (param0: number, param1: number) => number): ShortSpliterator;
    static asSpliteratorUnknownSize(paramarg0: ShortIterator, paramarg1: number): ShortSpliterator;
    static concat(paramarg0: (Object | null)[]): ShortSpliterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): ShortSpliterator;
    static fromTo(paramarg0: number, paramarg1: number): ShortSpliterator;
    static narrow(paramarg0: Spliterator$OfInt): ShortSpliterator;
    static onEachMatching(paramarg0: ShortSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static onEachMatching(paramarg0: ShortSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: number): ShortSpliterator;
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => number): ShortSpliterator;
    static widen(paramarg0: ShortSpliterator): IntSpliterator;
    static wrap(paramarg0: ByteSpliterator): ShortSpliterator;
    static wrap(paramarg0: number[]): ShortSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number): ShortSpliterator;
    static wrap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): ShortSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): ShortSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): ShortSpliterator;
    static wrapPreSorted(paramarg0: number[], paramarg1: (param0: number, param1: number) => number): ShortSpliterator;
    private constructor()
}
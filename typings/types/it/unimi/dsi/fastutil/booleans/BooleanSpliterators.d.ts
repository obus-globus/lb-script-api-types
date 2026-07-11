import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { BooleanPredicate } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanPredicate.d.ts'
import type { BooleanSpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterator.d.ts'
import type { BooleanSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanSpliterators$EmptySpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: BooleanSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asBooleanSpliterator(paramarg0: Spliterator<Object>): BooleanSpliterator;
    static asBooleanSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static asIterator(paramarg0: BooleanSpliterator): BooleanIterator;
    static asSpliterator(paramarg0: BooleanIterator, paramarg1: number, paramarg2: number): BooleanSpliterator;
    static asSpliteratorFromSorted(paramarg0: BooleanIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: BooleanIterator, paramarg1: number, paramarg2: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static asSpliteratorUnknownSize(paramarg0: BooleanIterator, paramarg1: number): BooleanSpliterator;
    static concat(...paramarg0: (Object | null)[]): BooleanSpliterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): BooleanSpliterator;
    static onEachMatching(paramarg0: BooleanSpliterator, paramarg1: (param0: boolean) => boolean, paramarg2: (param0: boolean) => void): void;
    static singleton(paramarg0: boolean): BooleanSpliterator;
    static singleton(paramarg0: boolean, paramarg1: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static wrap(paramarg0: (Object | null)[]): BooleanSpliterator;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): BooleanSpliterator;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number): BooleanSpliterator;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): BooleanSpliterator;
    private constructor()
}
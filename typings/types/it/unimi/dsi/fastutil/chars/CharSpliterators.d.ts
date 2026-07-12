import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharConsumer } from '../../../../../it/unimi/dsi/fastutil/chars/CharConsumer.d.ts'
import type { CharIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharIterator.d.ts'
import type { CharPredicate } from '../../../../../it/unimi/dsi/fastutil/chars/CharPredicate.d.ts'
import type { CharSpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterator.d.ts'
import type { CharSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharSpliterators$EmptySpliterator.d.ts'
import type { IntSpliterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntSpliterator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Spliterator$OfInt } from '../../../../../java/util/Spliterator$OfInt.d.ts'
import type { IntConsumer } from '../../../../../java/util/function/IntConsumer.d.ts'
import type { IntPredicate } from '../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: CharSpliterators$EmptySpliterator;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asCharSpliterator(paramarg0: Spliterator<Object>): CharSpliterator;
    static asCharSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: string, param1: string) => number): CharSpliterator;
    static asIterator(paramarg0: CharSpliterator): CharIterator;
    static asSpliterator(paramarg0: CharIterator, paramarg1: number, paramarg2: number): CharSpliterator;
    static asSpliteratorFromSorted(paramarg0: CharIterator, paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): CharSpliterator;
    static asSpliteratorFromSortedUnknownSize(paramarg0: CharIterator, paramarg1: number, paramarg2: (param0: string, param1: string) => number): CharSpliterator;
    static asSpliteratorUnknownSize(paramarg0: CharIterator, paramarg1: number): CharSpliterator;
    static concat(...paramarg0: (Object | null)[]): CharSpliterator;
    static concat(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): CharSpliterator;
    static fromTo(paramarg0: string, paramarg1: string): CharSpliterator;
    static narrow(paramarg0: Spliterator$OfInt): CharSpliterator;
    static onEachMatching(paramarg0: CharSpliterator, paramarg1: (param0: string) => boolean, paramarg2: (param0: string) => void): void;
    static onEachMatching(paramarg0: CharSpliterator, paramarg1: (param0: number) => boolean, paramarg2: (param0: number) => void): void;
    static singleton(paramarg0: string): CharSpliterator;
    static singleton(paramarg0: string, paramarg1: (param0: string, param1: string) => number): CharSpliterator;
    static widen(paramarg0: CharSpliterator): IntSpliterator;
    static wrap(paramarg0: string[]): CharSpliterator;
    static wrap(paramarg0: string[], paramarg1: number, paramarg2: number): CharSpliterator;
    static wrap(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number): CharSpliterator;
    static wrapPreSorted(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: string, param1: string) => number): CharSpliterator;
    static wrapPreSorted(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): CharSpliterator;
    static wrapPreSorted(paramarg0: string[], paramarg1: (param0: string, param1: string) => number): CharSpliterator;
    private constructor()
}
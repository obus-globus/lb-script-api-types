import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectSpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterator.d.ts'
import type { ObjectSpliterators$EmptySpliterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectSpliterators$EmptySpliterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: ObjectSpliterators$EmptySpliterator<Object>;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asIterator(paramarg0: ObjectSpliterator<Object>): ObjectIterator<Object>;
    static asObjectSpliterator(paramarg0: Spliterator<Object>): ObjectSpliterator<Object>;
    static asObjectSpliterator(paramarg0: Spliterator<Object>, paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static asSpliterator(paramarg0: ObjectIterator<Object>, paramarg1: number, paramarg2: number): ObjectSpliterator<Object>;
    static asSpliteratorFromSorted(paramarg0: ObjectIterator<Object>, paramarg1: number, paramarg2: number, paramarg3: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static asSpliteratorFromSortedUnknownSize(paramarg0: ObjectIterator<Object>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static asSpliteratorUnknownSize(paramarg0: ObjectIterator<Object>, paramarg1: number): ObjectSpliterator<Object>;
    static concat(...paramarg0: ObjectSpliterator<Object>[]): ObjectSpliterator<Object>;
    static concat(paramarg0: ObjectSpliterator<Object>[], paramarg1: number, paramarg2: number): ObjectSpliterator<Object>;
    static emptySpliterator(): ObjectSpliterator<Object>;
    static onEachMatching(paramarg0: Spliterator<Object>, paramarg1: (param0: Object) => boolean, paramarg2: (param0: Object) => void): void;
    static singleton(paramarg0: Object | null): ObjectSpliterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static wrap(paramarg0: (Object | null)[]): ObjectSpliterator<Object>;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): ObjectSpliterator<Object>;
    static wrap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number): ObjectSpliterator<Object>;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    static wrapPreSorted(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<Object>;
    private constructor()
}
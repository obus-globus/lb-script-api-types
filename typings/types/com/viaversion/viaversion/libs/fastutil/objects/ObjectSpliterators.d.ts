import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { ObjectSpliterators$EmptySpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterators$EmptySpliterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Spliterator } from '../../../../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators extends Object {
    static COLLECTION_SPLITERATOR_CHARACTERISTICS: number;
    static EMPTY_SPLITERATOR: ObjectSpliterators$EmptySpliterator<Object>;
    static LIST_SPLITERATOR_CHARACTERISTICS: number;
    static SET_SPLITERATOR_CHARACTERISTICS: number;
    static SORTED_SET_SPLITERATOR_CHARACTERISTICS: number;
    static asIterator<K extends unknown>(paramarg0: ObjectSpliterator<K>): ObjectIterator<K>;
    static asObjectSpliterator<K extends unknown>(paramarg0: Spliterator<K>): ObjectSpliterator<K>;
    static asObjectSpliterator<K extends unknown>(paramarg0: Spliterator<K>, paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static asSpliterator<K extends unknown>(paramarg0: ObjectIterator<K>, paramarg1: number, paramarg2: number): ObjectSpliterator<K>;
    static asSpliteratorFromSorted<K extends unknown>(paramarg0: ObjectIterator<K>, paramarg1: number, paramarg2: number, paramarg3: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static asSpliteratorFromSortedUnknownSize<K extends unknown>(paramarg0: ObjectIterator<K>, paramarg1: number, paramarg2: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static asSpliteratorUnknownSize<K extends unknown>(paramarg0: ObjectIterator<K>, paramarg1: number): ObjectSpliterator<K>;
    static concat<K extends unknown>(...paramarg0: ObjectSpliterator<K>[]): ObjectSpliterator<K>;
    static concat<K extends unknown>(paramarg0: ObjectSpliterator<K>[], paramarg1: number, paramarg2: number): ObjectSpliterator<K>;
    static emptySpliterator<K extends unknown>(): ObjectSpliterator<K>;
    static onEachMatching<K extends unknown>(paramarg0: Spliterator<K>, paramarg1: (param0: Object) => boolean, paramarg2: (param0: Object) => void): void;
    static singleton<K extends unknown>(paramarg0: K): ObjectSpliterator<K>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static wrap<K extends unknown>(paramarg0: K[]): ObjectSpliterator<K>;
    static wrap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): ObjectSpliterator<K>;
    static wrap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: number): ObjectSpliterator<K>;
    static wrapPreSorted<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static wrapPreSorted<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    static wrapPreSorted<K extends unknown>(paramarg0: K[], paramarg1: (param0: Object, param1: Object) => number): ObjectSpliterator<K>;
    private constructor()
}
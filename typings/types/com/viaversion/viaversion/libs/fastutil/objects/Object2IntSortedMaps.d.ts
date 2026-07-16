import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntSortedMaps extends Object {
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Object2IntMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Object2IntMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): { [key: string]: any };
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object, param1: Object) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
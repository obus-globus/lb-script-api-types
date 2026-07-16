import type { Object2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Object2LongMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Object2LongMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: number): { [key: string]: any };
    static singleton(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object, param1: Object) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
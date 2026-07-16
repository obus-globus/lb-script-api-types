import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap<V extends unknown>(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable<V extends unknown>(paramarg0: { [key: string]: any }): Int2ReferenceMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Int2ReferenceMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): { [key: string]: any };
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static emptyMap<V extends unknown>(): JavaMap<any, any>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable<V extends unknown>(paramarg0: JavaMap<any, any>): Long2ObjectMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: JavaMap<any, any>): ObjectBidirectionalIterator<Long2ObjectMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): JavaMap<any, any>;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V, paramarg2: (param0: number, param1: number) => number): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
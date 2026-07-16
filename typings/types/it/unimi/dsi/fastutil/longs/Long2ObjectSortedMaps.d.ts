import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Long2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Long2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
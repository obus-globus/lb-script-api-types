import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: JavaMap<any, any>): Int2FloatMap$Entry[];
    static fastIterator(paramarg0: JavaMap<any, any>): ObjectBidirectionalIterator<Int2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): JavaMap<any, any>;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
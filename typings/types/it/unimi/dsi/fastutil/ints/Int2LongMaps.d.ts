import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2LongMaps extends Object {
    static EMPTY_MAP: Int2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Int2LongMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2LongMap): Int2LongMap$Entry[];
    static fastIterator(paramarg0: Int2LongMap): ObjectIterator<Int2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Int2LongMap;
    static synchronize(paramarg0: Int2LongMap): Int2LongMap;
    static synchronize(paramarg0: Int2LongMap, paramarg1: Object): Int2LongMap;
    static unmodifiable(paramarg0: Int2LongMap): Int2LongMap;
    private constructor()
}
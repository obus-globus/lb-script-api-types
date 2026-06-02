import type { Int2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ByteMaps extends Object {
    static EMPTY_MAP: Int2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Int2ByteMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Int2ByteMap): K[];
    static fastIterator(paramarg0: Int2ByteMap): ObjectIterator<Int2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Int2ByteMap;
    static synchronize(paramarg0: Int2ByteMap): Int2ByteMap;
    static synchronize(paramarg0: Int2ByteMap, paramarg1: Object): Int2ByteMap;
    static unmodifiable(paramarg0: Int2ByteMap): Int2ByteMap;
    private constructor()
}
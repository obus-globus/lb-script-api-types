import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteMaps extends Object {
    static EMPTY_MAP: Long2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Long2ByteMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Long2ByteMap): K[];
    static fastIterator(paramarg0: Long2ByteMap): ObjectIterator<Long2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Long2ByteMap;
    static synchronize(paramarg0: Long2ByteMap): Long2ByteMap;
    static synchronize(paramarg0: Long2ByteMap, paramarg1: Object): Long2ByteMap;
    static unmodifiable(paramarg0: Long2ByteMap): Long2ByteMap;
    private constructor()
}
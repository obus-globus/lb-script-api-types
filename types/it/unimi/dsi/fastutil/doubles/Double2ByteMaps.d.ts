import type { Double2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteMaps extends Object {
    static EMPTY_MAP: Double2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Double2ByteMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Double2ByteMap): K[];
    static fastIterator(paramarg0: Double2ByteMap): ObjectIterator<Double2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Double2ByteMap;
    static synchronize(paramarg0: Double2ByteMap): Double2ByteMap;
    static synchronize(paramarg0: Double2ByteMap, paramarg1: Object): Double2ByteMap;
    static unmodifiable(paramarg0: Double2ByteMap): Double2ByteMap;
    private constructor()
}
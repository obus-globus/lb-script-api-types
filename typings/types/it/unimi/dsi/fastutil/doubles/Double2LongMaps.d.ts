import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2LongMaps extends Object {
    static EMPTY_MAP: Double2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Double2LongMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Double2LongMap): K[];
    static fastIterator(paramarg0: Double2LongMap): ObjectIterator<Double2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Double2LongMap;
    static synchronize(paramarg0: Double2LongMap): Double2LongMap;
    static synchronize(paramarg0: Double2LongMap, paramarg1: Object): Double2LongMap;
    static unmodifiable(paramarg0: Double2LongMap): Double2LongMap;
    private constructor()
}
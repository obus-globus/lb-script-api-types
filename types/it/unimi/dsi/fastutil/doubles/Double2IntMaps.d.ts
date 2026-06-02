import type { Double2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2IntMaps extends Object {
    static EMPTY_MAP: Double2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Double2IntMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Double2IntMap): K[];
    static fastIterator(paramarg0: Double2IntMap): ObjectIterator<Double2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Double2IntMap;
    static synchronize(paramarg0: Double2IntMap): Double2IntMap;
    static synchronize(paramarg0: Double2IntMap, paramarg1: Object): Double2IntMap;
    static unmodifiable(paramarg0: Double2IntMap): Double2IntMap;
    private constructor()
}
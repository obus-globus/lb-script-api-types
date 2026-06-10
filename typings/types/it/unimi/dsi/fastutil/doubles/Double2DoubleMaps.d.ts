import type { Double2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleMaps extends Object {
    static EMPTY_MAP: Double2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Double2DoubleMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Double2DoubleMap): Double2DoubleMap$Entry[];
    static fastIterator(paramarg0: Double2DoubleMap): ObjectIterator<Double2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Double2DoubleMap;
    static synchronize(paramarg0: Double2DoubleMap): Double2DoubleMap;
    static synchronize(paramarg0: Double2DoubleMap, paramarg1: Object): Double2DoubleMap;
    static unmodifiable(paramarg0: Double2DoubleMap): Double2DoubleMap;
    private constructor()
}
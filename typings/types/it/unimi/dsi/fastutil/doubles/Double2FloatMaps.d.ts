import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatMaps extends Object {
    static EMPTY_MAP: Double2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Double2FloatMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Double2FloatMap): Double2FloatMap$Entry[];
    static fastIterator(paramarg0: Double2FloatMap): ObjectIterator<Double2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Double2FloatMap;
    static synchronize(paramarg0: Double2FloatMap): Double2FloatMap;
    static synchronize(paramarg0: Double2FloatMap, paramarg1: Object): Double2FloatMap;
    static unmodifiable(paramarg0: Double2FloatMap): Double2FloatMap;
    private constructor()
}
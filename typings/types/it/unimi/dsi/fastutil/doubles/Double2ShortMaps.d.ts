import type { Double2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ShortMaps extends Object {
    static EMPTY_MAP: Double2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Double2ShortMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Double2ShortMap): Double2ShortMap$Entry[];
    static fastIterator(paramarg0: Double2ShortMap): ObjectIterator<Double2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Double2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Double2ShortMap;
    static synchronize(paramarg0: Double2ShortMap): Double2ShortMap;
    static synchronize(paramarg0: Double2ShortMap, paramarg1: Object): Double2ShortMap;
    static unmodifiable(paramarg0: Double2ShortMap): Double2ShortMap;
    private constructor()
}
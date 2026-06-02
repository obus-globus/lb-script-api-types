import type { Double2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanMaps extends Object {
    static EMPTY_MAP: Double2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Double2BooleanMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Double2BooleanMap): K[];
    static fastIterator(paramarg0: Double2BooleanMap): ObjectIterator<Double2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Double2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Double2BooleanMap;
    static synchronize(paramarg0: Double2BooleanMap): Double2BooleanMap;
    static synchronize(paramarg0: Double2BooleanMap, paramarg1: Object): Double2BooleanMap;
    static unmodifiable(paramarg0: Double2BooleanMap): Double2BooleanMap;
    private constructor()
}
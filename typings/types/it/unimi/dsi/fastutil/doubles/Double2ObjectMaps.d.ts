import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectMaps extends Object {
    static EMPTY_MAP: Double2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Double2ObjectMap<Object>;
    static fastForEach(paramarg0: Double2ObjectMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Double2ObjectMap<Object>): Double2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Double2ObjectMap<Object>): ObjectIterator<Double2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Double2ObjectMap<Object>;
    static synchronize(paramarg0: Double2ObjectMap<Object>): Double2ObjectMap<Object>;
    static synchronize(paramarg0: Double2ObjectMap<Object>, paramarg1: Object): Double2ObjectMap<Object>;
    static unmodifiable(paramarg0: Double2ObjectMap<Object>): Double2ObjectMap<Object>;
    private constructor()
}
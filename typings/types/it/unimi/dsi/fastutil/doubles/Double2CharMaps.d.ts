import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharMaps extends Object {
    static EMPTY_MAP: Double2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Double2CharMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Double2CharMap): Double2CharMap$Entry[];
    static fastIterator(paramarg0: Double2CharMap): ObjectIterator<Double2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Double2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Double2CharMap;
    static synchronize(paramarg0: Double2CharMap): Double2CharMap;
    static synchronize(paramarg0: Double2CharMap, paramarg1: Object): Double2CharMap;
    static unmodifiable(paramarg0: Double2CharMap): Double2CharMap;
    private constructor()
}
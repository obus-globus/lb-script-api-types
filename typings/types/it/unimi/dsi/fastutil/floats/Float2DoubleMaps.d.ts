import type { Float2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2DoubleMaps extends Object {
    static EMPTY_MAP: Float2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Float2DoubleMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2DoubleMap): Float2DoubleMap$Entry[];
    static fastIterator(paramarg0: Float2DoubleMap): ObjectIterator<Float2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Float2DoubleMap;
    static synchronize(paramarg0: Float2DoubleMap): Float2DoubleMap;
    static synchronize(paramarg0: Float2DoubleMap, paramarg1: Object): Float2DoubleMap;
    static unmodifiable(paramarg0: Float2DoubleMap): Float2DoubleMap;
    private constructor()
}
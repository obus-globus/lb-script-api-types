import type { Float2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2FloatMaps extends Object {
    static EMPTY_MAP: Float2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Float2FloatMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2FloatMap): Float2FloatMap$Entry[];
    static fastIterator(paramarg0: Float2FloatMap): ObjectIterator<Float2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Float2FloatMap;
    static synchronize(paramarg0: Float2FloatMap): Float2FloatMap;
    static synchronize(paramarg0: Float2FloatMap, paramarg1: Object): Float2FloatMap;
    static unmodifiable(paramarg0: Float2FloatMap): Float2FloatMap;
    private constructor()
}
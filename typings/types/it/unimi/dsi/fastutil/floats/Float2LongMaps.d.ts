import type { Float2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongMaps extends Object {
    static EMPTY_MAP: Float2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Float2LongMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2LongMap): Float2LongMap$Entry[];
    static fastIterator(paramarg0: Float2LongMap): ObjectIterator<Float2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Float2LongMap;
    static synchronize(paramarg0: Float2LongMap): Float2LongMap;
    static synchronize(paramarg0: Float2LongMap, paramarg1: Object): Float2LongMap;
    static unmodifiable(paramarg0: Float2LongMap): Float2LongMap;
    private constructor()
}
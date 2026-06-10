import type { Float2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteMaps extends Object {
    static EMPTY_MAP: Float2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Float2ByteMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2ByteMap): Float2ByteMap$Entry[];
    static fastIterator(paramarg0: Float2ByteMap): ObjectIterator<Float2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Float2ByteMap;
    static synchronize(paramarg0: Float2ByteMap): Float2ByteMap;
    static synchronize(paramarg0: Float2ByteMap, paramarg1: Object): Float2ByteMap;
    static unmodifiable(paramarg0: Float2ByteMap): Float2ByteMap;
    private constructor()
}
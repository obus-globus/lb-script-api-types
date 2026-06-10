import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharMaps extends Object {
    static EMPTY_MAP: Float2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Float2CharMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Float2CharMap): Float2CharMap$Entry[];
    static fastIterator(paramarg0: Float2CharMap): ObjectIterator<Float2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Float2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Float2CharMap;
    static synchronize(paramarg0: Float2CharMap): Float2CharMap;
    static synchronize(paramarg0: Float2CharMap, paramarg1: Object): Float2CharMap;
    static unmodifiable(paramarg0: Float2CharMap): Float2CharMap;
    private constructor()
}
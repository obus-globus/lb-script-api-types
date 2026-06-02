import type { Float2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntMaps extends Object {
    static EMPTY_MAP: Float2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Float2IntMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Float2IntMap): K[];
    static fastIterator(paramarg0: Float2IntMap): ObjectIterator<Float2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Float2IntMap;
    static synchronize(paramarg0: Float2IntMap): Float2IntMap;
    static synchronize(paramarg0: Float2IntMap, paramarg1: Object): Float2IntMap;
    static unmodifiable(paramarg0: Float2IntMap): Float2IntMap;
    private constructor()
}
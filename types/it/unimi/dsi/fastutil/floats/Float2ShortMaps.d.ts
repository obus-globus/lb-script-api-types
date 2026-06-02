import type { Float2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortMaps extends Object {
    static EMPTY_MAP: Float2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Float2ShortMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Float2ShortMap): K[];
    static fastIterator(paramarg0: Float2ShortMap): ObjectIterator<Float2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Float2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Float2ShortMap;
    static synchronize(paramarg0: Float2ShortMap): Float2ShortMap;
    static synchronize(paramarg0: Float2ShortMap, paramarg1: Object): Float2ShortMap;
    static unmodifiable(paramarg0: Float2ShortMap): Float2ShortMap;
    private constructor()
}
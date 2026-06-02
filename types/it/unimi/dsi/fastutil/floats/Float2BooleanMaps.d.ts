import type { Float2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanMaps extends Object {
    static EMPTY_MAP: Float2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Float2BooleanMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Float2BooleanMap): K[];
    static fastIterator(paramarg0: Float2BooleanMap): ObjectIterator<Float2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Float2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Float2BooleanMap;
    static synchronize(paramarg0: Float2BooleanMap): Float2BooleanMap;
    static synchronize(paramarg0: Float2BooleanMap, paramarg1: Object): Float2BooleanMap;
    static unmodifiable(paramarg0: Float2BooleanMap): Float2BooleanMap;
    private constructor()
}
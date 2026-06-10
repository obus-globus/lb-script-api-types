import type { Int2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatMaps extends Object {
    static EMPTY_MAP: Int2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Int2FloatMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2FloatMap): Int2FloatMap$Entry[];
    static fastIterator(paramarg0: Int2FloatMap): ObjectIterator<Int2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Int2FloatMap;
    static synchronize(paramarg0: Int2FloatMap): Int2FloatMap;
    static synchronize(paramarg0: Int2FloatMap, paramarg1: Object): Int2FloatMap;
    static unmodifiable(paramarg0: Int2FloatMap): Int2FloatMap;
    private constructor()
}
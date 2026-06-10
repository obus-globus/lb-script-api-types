import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleMaps extends Object {
    static EMPTY_MAP: Int2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Int2DoubleMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2DoubleMap): Int2DoubleMap$Entry[];
    static fastIterator(paramarg0: Int2DoubleMap): ObjectIterator<Int2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Int2DoubleMap;
    static synchronize(paramarg0: Int2DoubleMap): Int2DoubleMap;
    static synchronize(paramarg0: Int2DoubleMap, paramarg1: Object): Int2DoubleMap;
    static unmodifiable(paramarg0: Int2DoubleMap): Int2DoubleMap;
    private constructor()
}
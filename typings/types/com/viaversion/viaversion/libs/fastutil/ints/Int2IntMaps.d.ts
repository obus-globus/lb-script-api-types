import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2IntMaps extends Object {
    static fastForEach(paramarg0: Int2IntMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Int2IntMap): Int2IntMap$Entry[];
    static fastIterator(paramarg0: Int2IntMap): ObjectIterator<Int2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Int2IntMap;
    static synchronize(paramarg0: Int2IntMap): Int2IntMap;
    static synchronize(paramarg0: Int2IntMap, paramarg1: Object): Int2IntMap;
    static unmodifiable(paramarg0: Int2IntMap): Int2IntMap;
    private constructor()
}
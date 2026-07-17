import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Int2IntMaps extends Object {
    static fastForEach(paramarg0: JavaMap<any, any>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: JavaMap<any, any>): Int2IntMap$Entry[];
    static fastIterator(paramarg0: JavaMap<any, any>): ObjectIterator<Int2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
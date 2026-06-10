import type { Long2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntMaps extends Object {
    static EMPTY_MAP: Long2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Long2IntMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Long2IntMap): Long2IntMap$Entry[];
    static fastIterator(paramarg0: Long2IntMap): ObjectIterator<Long2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Long2IntMap;
    static synchronize(paramarg0: Long2IntMap): Long2IntMap;
    static synchronize(paramarg0: Long2IntMap, paramarg1: Object): Long2IntMap;
    static unmodifiable(paramarg0: Long2IntMap): Long2IntMap;
    private constructor()
}
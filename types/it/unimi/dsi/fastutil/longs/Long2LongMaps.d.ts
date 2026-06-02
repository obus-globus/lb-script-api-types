import type { Long2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongMaps extends Object {
    static EMPTY_MAP: Long2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Long2LongMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Long2LongMap): K[];
    static fastIterator(paramarg0: Long2LongMap): ObjectIterator<Long2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Long2LongMap;
    static synchronize(paramarg0: Long2LongMap): Long2LongMap;
    static synchronize(paramarg0: Long2LongMap, paramarg1: Object): Long2LongMap;
    static unmodifiable(paramarg0: Long2LongMap): Long2LongMap;
    private constructor()
}
import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortMaps extends Object {
    static EMPTY_MAP: Long2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Long2ShortMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Long2ShortMap): K[];
    static fastIterator(paramarg0: Long2ShortMap): ObjectIterator<Long2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Long2ShortMap;
    static synchronize(paramarg0: Long2ShortMap): Long2ShortMap;
    static synchronize(paramarg0: Long2ShortMap, paramarg1: Object): Long2ShortMap;
    static unmodifiable(paramarg0: Long2ShortMap): Long2ShortMap;
    private constructor()
}
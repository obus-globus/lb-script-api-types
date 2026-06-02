import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatMaps extends Object {
    static EMPTY_MAP: Long2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Long2FloatMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Long2FloatMap): K[];
    static fastIterator(paramarg0: Long2FloatMap): ObjectIterator<Long2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Long2FloatMap;
    static synchronize(paramarg0: Long2FloatMap): Long2FloatMap;
    static synchronize(paramarg0: Long2FloatMap, paramarg1: Object): Long2FloatMap;
    static unmodifiable(paramarg0: Long2FloatMap): Long2FloatMap;
    private constructor()
}
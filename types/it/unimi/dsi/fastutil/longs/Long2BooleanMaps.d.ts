import type { Long2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanMaps extends Object {
    static EMPTY_MAP: Long2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Long2BooleanMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Long2BooleanMap): K[];
    static fastIterator(paramarg0: Long2BooleanMap): ObjectIterator<Long2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Long2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Long2BooleanMap;
    static synchronize(paramarg0: Long2BooleanMap): Long2BooleanMap;
    static synchronize(paramarg0: Long2BooleanMap, paramarg1: Object): Long2BooleanMap;
    static unmodifiable(paramarg0: Long2BooleanMap): Long2BooleanMap;
    private constructor()
}
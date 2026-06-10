import type { Long2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleMaps extends Object {
    static EMPTY_MAP: Long2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Long2DoubleMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Long2DoubleMap): Long2DoubleMap$Entry[];
    static fastIterator(paramarg0: Long2DoubleMap): ObjectIterator<Long2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Long2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Long2DoubleMap;
    static synchronize(paramarg0: Long2DoubleMap): Long2DoubleMap;
    static synchronize(paramarg0: Long2DoubleMap, paramarg1: Object): Long2DoubleMap;
    static unmodifiable(paramarg0: Long2DoubleMap): Long2DoubleMap;
    private constructor()
}
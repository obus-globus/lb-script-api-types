import type { Int2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortMaps extends Object {
    static EMPTY_MAP: Int2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Int2ShortMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Int2ShortMap): K[];
    static fastIterator(paramarg0: Int2ShortMap): ObjectIterator<Int2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Int2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Int2ShortMap;
    static synchronize(paramarg0: Int2ShortMap): Int2ShortMap;
    static synchronize(paramarg0: Int2ShortMap, paramarg1: Object): Int2ShortMap;
    static unmodifiable(paramarg0: Int2ShortMap): Int2ShortMap;
    private constructor()
}
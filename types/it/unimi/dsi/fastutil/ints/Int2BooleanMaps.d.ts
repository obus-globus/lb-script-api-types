import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanMaps extends Object {
    static EMPTY_MAP: Int2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Int2BooleanMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Int2BooleanMap): K[];
    static fastIterator(paramarg0: Int2BooleanMap): ObjectIterator<Int2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Int2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Int2BooleanMap;
    static synchronize(paramarg0: Int2BooleanMap): Int2BooleanMap;
    static synchronize(paramarg0: Int2BooleanMap, paramarg1: Object): Int2BooleanMap;
    static unmodifiable(paramarg0: Int2BooleanMap): Int2BooleanMap;
    private constructor()
}
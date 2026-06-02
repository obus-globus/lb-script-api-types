import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharMaps extends Object {
    static EMPTY_MAP: Int2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Int2CharMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Int2CharMap): K[];
    static fastIterator(paramarg0: Int2CharMap): ObjectIterator<Int2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Int2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Int2CharMap;
    static synchronize(paramarg0: Int2CharMap): Int2CharMap;
    static synchronize(paramarg0: Int2CharMap, paramarg1: Object): Int2CharMap;
    static unmodifiable(paramarg0: Int2CharMap): Int2CharMap;
    private constructor()
}
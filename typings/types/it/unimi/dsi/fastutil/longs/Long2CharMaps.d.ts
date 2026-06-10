import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharMaps extends Object {
    static EMPTY_MAP: Long2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Long2CharMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Long2CharMap): Long2CharMap$Entry[];
    static fastIterator(paramarg0: Long2CharMap): ObjectIterator<Long2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Long2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Long2CharMap;
    static synchronize(paramarg0: Long2CharMap): Long2CharMap;
    static synchronize(paramarg0: Long2CharMap, paramarg1: Object): Long2CharMap;
    static unmodifiable(paramarg0: Long2CharMap): Long2CharMap;
    private constructor()
}
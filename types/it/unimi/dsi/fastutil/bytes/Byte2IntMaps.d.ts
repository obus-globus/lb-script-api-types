import type { Byte2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntMaps extends Object {
    static EMPTY_MAP: Byte2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2IntMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Byte2IntMap): K[];
    static fastIterator(paramarg0: Byte2IntMap): ObjectIterator<Byte2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2IntMap;
    static synchronize(paramarg0: Byte2IntMap): Byte2IntMap;
    static synchronize(paramarg0: Byte2IntMap, paramarg1: Object): Byte2IntMap;
    static unmodifiable(paramarg0: Byte2IntMap): Byte2IntMap;
    private constructor()
}
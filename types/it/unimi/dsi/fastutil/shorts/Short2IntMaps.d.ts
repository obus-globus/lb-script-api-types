import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntMaps extends Object {
    static EMPTY_MAP: Short2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Short2IntMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Short2IntMap): K[];
    static fastIterator(paramarg0: Short2IntMap): ObjectIterator<Short2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2IntMap;
    static singleton(paramarg0: number, paramarg1: number): Short2IntMap;
    static synchronize(paramarg0: Short2IntMap): Short2IntMap;
    static synchronize(paramarg0: Short2IntMap, paramarg1: Object): Short2IntMap;
    static unmodifiable(paramarg0: Short2IntMap): Short2IntMap;
    private constructor()
}
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongMaps extends Object {
    static EMPTY_MAP: Short2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Short2LongMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2LongMap): Short2LongMap$Entry[];
    static fastIterator(paramarg0: Short2LongMap): ObjectIterator<Short2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Short2LongMap;
    static synchronize(paramarg0: Short2LongMap): Short2LongMap;
    static synchronize(paramarg0: Short2LongMap, paramarg1: Object): Short2LongMap;
    static unmodifiable(paramarg0: Short2LongMap): Short2LongMap;
    private constructor()
}
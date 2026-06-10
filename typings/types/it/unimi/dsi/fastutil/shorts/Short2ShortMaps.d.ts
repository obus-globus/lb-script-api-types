import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortMaps extends Object {
    static EMPTY_MAP: Short2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Short2ShortMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2ShortMap): Short2ShortMap$Entry[];
    static fastIterator(paramarg0: Short2ShortMap): ObjectIterator<Short2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Short2ShortMap;
    static synchronize(paramarg0: Short2ShortMap): Short2ShortMap;
    static synchronize(paramarg0: Short2ShortMap, paramarg1: Object): Short2ShortMap;
    static unmodifiable(paramarg0: Short2ShortMap): Short2ShortMap;
    private constructor()
}
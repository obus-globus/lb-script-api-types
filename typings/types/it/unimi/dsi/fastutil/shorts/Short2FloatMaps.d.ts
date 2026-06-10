import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatMaps extends Object {
    static EMPTY_MAP: Short2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Short2FloatMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2FloatMap): Short2FloatMap$Entry[];
    static fastIterator(paramarg0: Short2FloatMap): ObjectIterator<Short2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Short2FloatMap;
    static synchronize(paramarg0: Short2FloatMap): Short2FloatMap;
    static synchronize(paramarg0: Short2FloatMap, paramarg1: Object): Short2FloatMap;
    static unmodifiable(paramarg0: Short2FloatMap): Short2FloatMap;
    private constructor()
}
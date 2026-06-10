import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2DoubleMaps extends Object {
    static EMPTY_MAP: Short2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Short2DoubleMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2DoubleMap): Short2DoubleMap$Entry[];
    static fastIterator(paramarg0: Short2DoubleMap): ObjectIterator<Short2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Short2DoubleMap;
    static synchronize(paramarg0: Short2DoubleMap): Short2DoubleMap;
    static synchronize(paramarg0: Short2DoubleMap, paramarg1: Object): Short2DoubleMap;
    static unmodifiable(paramarg0: Short2DoubleMap): Short2DoubleMap;
    private constructor()
}
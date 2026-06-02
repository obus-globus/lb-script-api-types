import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleMaps extends Object {
    static EMPTY_MAP: Byte2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2DoubleMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Byte2DoubleMap): K[];
    static fastIterator(paramarg0: Byte2DoubleMap): ObjectIterator<Byte2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2DoubleMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2DoubleMap;
    static synchronize(paramarg0: Byte2DoubleMap): Byte2DoubleMap;
    static synchronize(paramarg0: Byte2DoubleMap, paramarg1: Object): Byte2DoubleMap;
    static unmodifiable(paramarg0: Byte2DoubleMap): Byte2DoubleMap;
    private constructor()
}
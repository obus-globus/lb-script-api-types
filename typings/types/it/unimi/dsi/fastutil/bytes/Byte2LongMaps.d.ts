import type { Byte2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongMaps extends Object {
    static EMPTY_MAP: Byte2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2LongMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2LongMap): Byte2LongMap$Entry[];
    static fastIterator(paramarg0: Byte2LongMap): ObjectIterator<Byte2LongMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2LongMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2LongMap;
    static synchronize(paramarg0: Byte2LongMap): Byte2LongMap;
    static synchronize(paramarg0: Byte2LongMap, paramarg1: Object): Byte2LongMap;
    static unmodifiable(paramarg0: Byte2LongMap): Byte2LongMap;
    private constructor()
}
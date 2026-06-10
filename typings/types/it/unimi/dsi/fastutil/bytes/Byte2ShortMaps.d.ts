import type { Byte2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortMaps extends Object {
    static EMPTY_MAP: Byte2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2ShortMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2ShortMap): Byte2ShortMap$Entry[];
    static fastIterator(paramarg0: Byte2ShortMap): ObjectIterator<Byte2ShortMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2ShortMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2ShortMap;
    static synchronize(paramarg0: Byte2ShortMap): Byte2ShortMap;
    static synchronize(paramarg0: Byte2ShortMap, paramarg1: Object): Byte2ShortMap;
    static unmodifiable(paramarg0: Byte2ShortMap): Byte2ShortMap;
    private constructor()
}
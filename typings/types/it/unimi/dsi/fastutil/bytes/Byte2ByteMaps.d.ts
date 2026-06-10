import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteMaps extends Object {
    static EMPTY_MAP: Byte2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2ByteMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2ByteMap): Byte2ByteMap$Entry[];
    static fastIterator(paramarg0: Byte2ByteMap): ObjectIterator<Byte2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2ByteMap;
    static synchronize(paramarg0: Byte2ByteMap): Byte2ByteMap;
    static synchronize(paramarg0: Byte2ByteMap, paramarg1: Object): Byte2ByteMap;
    static unmodifiable(paramarg0: Byte2ByteMap): Byte2ByteMap;
    private constructor()
}
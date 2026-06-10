import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ByteMaps extends Object {
    static EMPTY_MAP: Short2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Short2ByteMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2ByteMap): Short2ByteMap$Entry[];
    static fastIterator(paramarg0: Short2ByteMap): ObjectIterator<Short2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Short2ByteMap;
    static singleton(paramarg0: number, paramarg1: number): Short2ByteMap;
    static synchronize(paramarg0: Short2ByteMap): Short2ByteMap;
    static synchronize(paramarg0: Short2ByteMap, paramarg1: Object): Short2ByteMap;
    static unmodifiable(paramarg0: Short2ByteMap): Short2ByteMap;
    private constructor()
}
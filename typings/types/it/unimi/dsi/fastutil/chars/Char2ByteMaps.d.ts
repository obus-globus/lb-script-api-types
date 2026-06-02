import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteMaps extends Object {
    static EMPTY_MAP: Char2ByteMaps$EmptyMap;
    static fastForEach(paramarg0: Char2ByteMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Char2ByteMap): K[];
    static fastIterator(paramarg0: Char2ByteMap): ObjectIterator<Char2ByteMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2ByteMap;
    static singleton(paramarg0: string, paramarg1: number): Char2ByteMap;
    static synchronize(paramarg0: Char2ByteMap): Char2ByteMap;
    static synchronize(paramarg0: Char2ByteMap, paramarg1: Object): Char2ByteMap;
    static unmodifiable(paramarg0: Char2ByteMap): Char2ByteMap;
    private constructor()
}
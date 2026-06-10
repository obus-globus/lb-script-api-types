import type { Byte2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharMaps extends Object {
    static EMPTY_MAP: Byte2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2CharMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2CharMap): Byte2CharMap$Entry[];
    static fastIterator(paramarg0: Byte2CharMap): ObjectIterator<Byte2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Byte2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Byte2CharMap;
    static synchronize(paramarg0: Byte2CharMap): Byte2CharMap;
    static synchronize(paramarg0: Byte2CharMap, paramarg1: Object): Byte2CharMap;
    static unmodifiable(paramarg0: Byte2CharMap): Byte2CharMap;
    private constructor()
}
import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntMaps extends Object {
    static EMPTY_MAP: Char2IntMaps$EmptyMap;
    static fastForEach(paramarg0: Char2IntMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2IntMap): Char2IntMap$Entry[];
    static fastIterator(paramarg0: Char2IntMap): ObjectIterator<Char2IntMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2IntMap;
    static singleton(paramarg0: string, paramarg1: number): Char2IntMap;
    static synchronize(paramarg0: Char2IntMap): Char2IntMap;
    static synchronize(paramarg0: Char2IntMap, paramarg1: Object): Char2IntMap;
    static unmodifiable(paramarg0: Char2IntMap): Char2IntMap;
    private constructor()
}
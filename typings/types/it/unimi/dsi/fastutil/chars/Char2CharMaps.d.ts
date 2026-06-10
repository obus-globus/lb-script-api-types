import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharMaps extends Object {
    static EMPTY_MAP: Char2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Char2CharMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2CharMap): Char2CharMap$Entry[];
    static fastIterator(paramarg0: Char2CharMap): ObjectIterator<Char2CharMap$Entry>;
    static singleton(paramarg0: string, paramarg1: string): Char2CharMap;
    static singleton(paramarg0: string, paramarg1: string): Char2CharMap;
    static synchronize(paramarg0: Char2CharMap): Char2CharMap;
    static synchronize(paramarg0: Char2CharMap, paramarg1: Object): Char2CharMap;
    static unmodifiable(paramarg0: Char2CharMap): Char2CharMap;
    private constructor()
}
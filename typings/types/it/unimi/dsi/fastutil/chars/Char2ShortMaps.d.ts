import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortMaps extends Object {
    static EMPTY_MAP: Char2ShortMaps$EmptyMap;
    static fastForEach(paramarg0: Char2ShortMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2ShortMap): Char2ShortMap$Entry[];
    static fastIterator(paramarg0: Char2ShortMap): ObjectIterator<Char2ShortMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2ShortMap;
    static singleton(paramarg0: string, paramarg1: number): Char2ShortMap;
    static synchronize(paramarg0: Char2ShortMap): Char2ShortMap;
    static synchronize(paramarg0: Char2ShortMap, paramarg1: Object): Char2ShortMap;
    static unmodifiable(paramarg0: Char2ShortMap): Char2ShortMap;
    private constructor()
}
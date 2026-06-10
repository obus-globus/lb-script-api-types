import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongMaps extends Object {
    static EMPTY_MAP: Char2LongMaps$EmptyMap;
    static fastForEach(paramarg0: Char2LongMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2LongMap): Char2LongMap$Entry[];
    static fastIterator(paramarg0: Char2LongMap): ObjectIterator<Char2LongMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2LongMap;
    static singleton(paramarg0: string, paramarg1: number): Char2LongMap;
    static synchronize(paramarg0: Char2LongMap): Char2LongMap;
    static synchronize(paramarg0: Char2LongMap, paramarg1: Object): Char2LongMap;
    static unmodifiable(paramarg0: Char2LongMap): Char2LongMap;
    private constructor()
}
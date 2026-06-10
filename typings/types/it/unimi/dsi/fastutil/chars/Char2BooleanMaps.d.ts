import type { Char2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanMaps extends Object {
    static EMPTY_MAP: Char2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Char2BooleanMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2BooleanMap): Char2BooleanMap$Entry[];
    static fastIterator(paramarg0: Char2BooleanMap): ObjectIterator<Char2BooleanMap$Entry>;
    static singleton(paramarg0: string, paramarg1: boolean): Char2BooleanMap;
    static singleton(paramarg0: string, paramarg1: boolean): Char2BooleanMap;
    static synchronize(paramarg0: Char2BooleanMap): Char2BooleanMap;
    static synchronize(paramarg0: Char2BooleanMap, paramarg1: Object): Char2BooleanMap;
    static unmodifiable(paramarg0: Char2BooleanMap): Char2BooleanMap;
    private constructor()
}
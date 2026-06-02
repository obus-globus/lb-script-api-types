import type { Char2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatMaps extends Object {
    static EMPTY_MAP: Char2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Char2FloatMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Char2FloatMap): K[];
    static fastIterator(paramarg0: Char2FloatMap): ObjectIterator<Char2FloatMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2FloatMap;
    static singleton(paramarg0: string, paramarg1: number): Char2FloatMap;
    static synchronize(paramarg0: Char2FloatMap): Char2FloatMap;
    static synchronize(paramarg0: Char2FloatMap, paramarg1: Object): Char2FloatMap;
    static unmodifiable(paramarg0: Char2FloatMap): Char2FloatMap;
    private constructor()
}
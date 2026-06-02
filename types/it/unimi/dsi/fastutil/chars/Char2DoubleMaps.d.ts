import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleMaps extends Object {
    static EMPTY_MAP: Char2DoubleMaps$EmptyMap;
    static fastForEach(paramarg0: Char2DoubleMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Char2DoubleMap): K[];
    static fastIterator(paramarg0: Char2DoubleMap): ObjectIterator<Char2DoubleMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2DoubleMap;
    static singleton(paramarg0: string, paramarg1: number): Char2DoubleMap;
    static synchronize(paramarg0: Char2DoubleMap): Char2DoubleMap;
    static synchronize(paramarg0: Char2DoubleMap, paramarg1: Object): Char2DoubleMap;
    static unmodifiable(paramarg0: Char2DoubleMap): Char2DoubleMap;
    private constructor()
}
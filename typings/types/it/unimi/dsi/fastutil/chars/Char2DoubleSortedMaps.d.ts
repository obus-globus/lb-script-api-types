import type { Char2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Char2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Char2DoubleSortedMap): Char2DoubleMap$Entry[];
    static fastIterator(paramarg0: Char2DoubleSortedMap): ObjectBidirectionalIterator<Char2DoubleMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2DoubleSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2DoubleSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2DoubleSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2DoubleSortedMap;
    static synchronize(paramarg0: Char2DoubleSortedMap): Char2DoubleSortedMap;
    static synchronize(paramarg0: Char2DoubleSortedMap, paramarg1: Object): Char2DoubleSortedMap;
    static unmodifiable(paramarg0: Char2DoubleSortedMap): Char2DoubleSortedMap;
    private constructor()
}
import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortSortedMaps extends Object {
    static EMPTY_MAP: Char2ShortSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Char2ShortSortedMap): Char2ShortMap$Entry[];
    static fastIterator(paramarg0: Char2ShortSortedMap): ObjectBidirectionalIterator<Char2ShortMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2ShortSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2ShortSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2ShortSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2ShortSortedMap;
    static synchronize(paramarg0: Char2ShortSortedMap): Char2ShortSortedMap;
    static synchronize(paramarg0: Char2ShortSortedMap, paramarg1: Object): Char2ShortSortedMap;
    static unmodifiable(paramarg0: Char2ShortSortedMap): Char2ShortSortedMap;
    private constructor()
}
import type { Char2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ByteSortedMaps extends Object {
    static EMPTY_MAP: Char2ByteSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Char2ByteSortedMap): Char2ByteMap$Entry[];
    static fastIterator(paramarg0: Char2ByteSortedMap): ObjectBidirectionalIterator<Char2ByteMap$Entry>;
    static singleton(paramarg0: string, paramarg1: number): Char2ByteSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2ByteSortedMap;
    static singleton(paramarg0: string, paramarg1: number): Char2ByteSortedMap;
    static singleton(paramarg0: string, paramarg1: number, paramarg2: (param0: string, param1: string) => number): Char2ByteSortedMap;
    static synchronize(paramarg0: Char2ByteSortedMap): Char2ByteSortedMap;
    static synchronize(paramarg0: Char2ByteSortedMap, paramarg1: Object): Char2ByteSortedMap;
    static unmodifiable(paramarg0: Char2ByteSortedMap): Char2ByteSortedMap;
    private constructor()
}
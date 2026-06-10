import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharSortedMaps extends Object {
    static EMPTY_MAP: Short2CharSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Short2CharSortedMap): Short2CharMap$Entry[];
    static fastIterator(paramarg0: Short2CharSortedMap): ObjectBidirectionalIterator<Short2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Short2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => number): Short2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string): Short2CharSortedMap;
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => number): Short2CharSortedMap;
    static synchronize(paramarg0: Short2CharSortedMap): Short2CharSortedMap;
    static synchronize(paramarg0: Short2CharSortedMap, paramarg1: Object): Short2CharSortedMap;
    static unmodifiable(paramarg0: Short2CharSortedMap): Short2CharSortedMap;
    private constructor()
}
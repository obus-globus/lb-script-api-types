import type { Byte2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleMap$Entry.d.ts'
import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleSortedMaps extends Object {
    static EMPTY_MAP: Byte2DoubleSortedMaps$EmptySortedMap;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: Byte2DoubleSortedMap): Byte2DoubleMap$Entry[];
    static fastIterator(paramarg0: Byte2DoubleSortedMap): ObjectBidirectionalIterator<Byte2DoubleMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2DoubleSortedMap;
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): Byte2DoubleSortedMap;
    static synchronize(paramarg0: Byte2DoubleSortedMap): Byte2DoubleSortedMap;
    static synchronize(paramarg0: Byte2DoubleSortedMap, paramarg1: Object): Byte2DoubleSortedMap;
    static unmodifiable(paramarg0: Byte2DoubleSortedMap): Byte2DoubleSortedMap;
    private constructor()
}
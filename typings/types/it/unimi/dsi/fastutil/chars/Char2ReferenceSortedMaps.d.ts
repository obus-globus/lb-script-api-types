import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static emptyMap<V extends unknown>(): JavaMap<any, any>;
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object, param1: Object) => number;
    static fastIterable<V extends unknown>(paramarg0: JavaMap<any, any>): Char2ReferenceMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: JavaMap<any, any>): ObjectBidirectionalIterator<Char2ReferenceMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V): JavaMap<any, any>;
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V, paramarg2: (param0: string, param1: string) => number): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
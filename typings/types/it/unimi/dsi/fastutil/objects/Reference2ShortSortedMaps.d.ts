import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static emptyMap<K extends unknown>(): JavaMap<any, any>;
    static entryComparator<K extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable<K extends unknown>(paramarg0: JavaMap<any, any>): Reference2ShortMap$Entry<K>[];
    static fastIterator<K extends unknown>(paramarg0: JavaMap<any, any>): ObjectBidirectionalIterator<Reference2ShortMap$Entry<K>>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number): JavaMap<any, any>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number, paramarg2: (param0: Object, param1: Object) => number): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
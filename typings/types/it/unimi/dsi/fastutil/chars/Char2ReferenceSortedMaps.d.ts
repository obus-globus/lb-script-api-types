import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap<V extends unknown>(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object, param1: Object) => number;
    static fastIterable<V extends unknown>(paramarg0: { [key: string]: any }): Char2ReferenceMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Char2ReferenceMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V): { [key: string]: any };
    static singleton<V extends unknown>(paramarg0: string, paramarg1: V, paramarg2: (param0: string, param1: string) => number): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize<V extends unknown>(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable<V extends unknown>(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
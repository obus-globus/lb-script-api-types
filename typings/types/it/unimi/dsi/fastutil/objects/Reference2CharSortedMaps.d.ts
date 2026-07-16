import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Reference2CharMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Reference2CharMap$Entry<Object>>;
    static singleton(paramarg0: Object | null, paramarg1: string): { [key: string]: any };
    static singleton(paramarg0: Object | null, paramarg1: string, paramarg2: (param0: Object, param1: Object) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
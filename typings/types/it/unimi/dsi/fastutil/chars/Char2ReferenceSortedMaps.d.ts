import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: string, param1: string) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: { [key: string]: any }): Char2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Char2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: string, paramarg1: Object | null): { [key: string]: any };
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => number): { [key: string]: any };
    static singleton(paramarg0: string, paramarg1: Object | null): { [key: string]: any };
    static singleton(paramarg0: string, paramarg1: Object | null, paramarg2: (param0: string, param1: string) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
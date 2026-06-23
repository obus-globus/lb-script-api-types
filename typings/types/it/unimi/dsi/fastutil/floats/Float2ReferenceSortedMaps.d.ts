import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static emptyMap(): { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: { [key: string]: any }): Float2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Float2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: Object | null): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: Object | null, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
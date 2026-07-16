import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Float2CharMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Float2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: string, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
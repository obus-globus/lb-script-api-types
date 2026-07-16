import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: { [key: string]: any }): Short2BooleanMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Short2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
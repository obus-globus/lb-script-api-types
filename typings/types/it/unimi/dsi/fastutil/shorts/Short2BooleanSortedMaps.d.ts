import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanSortedMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: JavaMap<any, any>): Short2BooleanMap$Entry[];
    static fastIterator(paramarg0: JavaMap<any, any>): ObjectBidirectionalIterator<Short2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): JavaMap<any, any>;
    static singleton(paramarg0: number, paramarg1: boolean, paramarg2: (param0: number, param1: number) => number): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteSortedMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static entryComparator(paramarg0: (param0: number, param1: number) => number): (param0: Object) => boolean;
    static fastIterable(paramarg0: { [key: string]: any }): Long2ByteMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectBidirectionalIterator<Long2ByteMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: number): { [key: string]: any };
    static singleton(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
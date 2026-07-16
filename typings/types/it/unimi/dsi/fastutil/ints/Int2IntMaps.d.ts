import type { Int2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntMaps extends Object {
    static EMPTY_MAP: { [key: string]: any };
    static fastForEach(paramarg0: { [key: string]: any }, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: { [key: string]: any }): Int2IntMap$Entry[];
    static fastIterator(paramarg0: { [key: string]: any }): ObjectIterator<Int2IntMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }): { [key: string]: any };
    static synchronize(paramarg0: { [key: string]: any }, paramarg1: Object): { [key: string]: any };
    static unmodifiable(paramarg0: { [key: string]: any }): { [key: string]: any };
    private constructor()
}
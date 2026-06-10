import type { Byte2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatMaps extends Object {
    static EMPTY_MAP: Byte2FloatMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2FloatMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2FloatMap): Byte2FloatMap$Entry[];
    static fastIterator(paramarg0: Byte2FloatMap): ObjectIterator<Byte2FloatMap$Entry>;
    static singleton(paramarg0: number, paramarg1: number): Byte2FloatMap;
    static singleton(paramarg0: number, paramarg1: number): Byte2FloatMap;
    static synchronize(paramarg0: Byte2FloatMap): Byte2FloatMap;
    static synchronize(paramarg0: Byte2FloatMap, paramarg1: Object): Byte2FloatMap;
    static unmodifiable(paramarg0: Byte2FloatMap): Byte2FloatMap;
    private constructor()
}
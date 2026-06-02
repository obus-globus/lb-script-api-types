import type { Byte2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanMaps extends Object {
    static EMPTY_MAP: Byte2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Byte2BooleanMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Byte2BooleanMap): K[];
    static fastIterator(paramarg0: Byte2BooleanMap): ObjectIterator<Byte2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Byte2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Byte2BooleanMap;
    static synchronize(paramarg0: Byte2BooleanMap): Byte2BooleanMap;
    static synchronize(paramarg0: Byte2BooleanMap, paramarg1: Object): Byte2BooleanMap;
    static unmodifiable(paramarg0: Byte2BooleanMap): Byte2BooleanMap;
    private constructor()
}
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanMaps extends Object {
    static EMPTY_MAP: Short2BooleanMaps$EmptyMap;
    static fastForEach(paramarg0: Short2BooleanMap, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Short2BooleanMap): Short2BooleanMap$Entry[];
    static fastIterator(paramarg0: Short2BooleanMap): ObjectIterator<Short2BooleanMap$Entry>;
    static singleton(paramarg0: number, paramarg1: boolean): Short2BooleanMap;
    static singleton(paramarg0: number, paramarg1: boolean): Short2BooleanMap;
    static synchronize(paramarg0: Short2BooleanMap): Short2BooleanMap;
    static synchronize(paramarg0: Short2BooleanMap, paramarg1: Object): Short2BooleanMap;
    static unmodifiable(paramarg0: Short2BooleanMap): Short2BooleanMap;
    private constructor()
}
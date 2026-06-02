import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectMaps extends Object {
    static EMPTY_MAP: Short2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Short2ObjectMap<Object>;
    static fastForEach(paramarg0: Short2ObjectMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Short2ObjectMap<Object>): K[];
    static fastIterator(paramarg0: Short2ObjectMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Short2ObjectMap<Object>;
    static synchronize(paramarg0: Short2ObjectMap<Object>): Short2ObjectMap<Object>;
    static synchronize(paramarg0: Short2ObjectMap<Object>, paramarg1: Object): Short2ObjectMap<Object>;
    static unmodifiable(paramarg0: Short2ObjectMap<Object>): Short2ObjectMap<Object>;
    private constructor()
}
import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectMaps extends Object {
    static EMPTY_MAP: Byte2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Byte2ObjectMap<Object>;
    static fastForEach(paramarg0: Byte2ObjectMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Byte2ObjectMap<Object>): Byte2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Byte2ObjectMap<Object>): ObjectIterator<Byte2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ObjectMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ObjectMap<Object>;
    static synchronize(paramarg0: Byte2ObjectMap<Object>): Byte2ObjectMap<Object>;
    static synchronize(paramarg0: Byte2ObjectMap<Object>, paramarg1: Object): Byte2ObjectMap<Object>;
    static unmodifiable(paramarg0: Byte2ObjectMap<Object>): Byte2ObjectMap<Object>;
    private constructor()
}
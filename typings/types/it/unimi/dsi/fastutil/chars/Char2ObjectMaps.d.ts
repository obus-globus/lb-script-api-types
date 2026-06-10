import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectMaps extends Object {
    static EMPTY_MAP: Char2ObjectMaps$EmptyMap<Object>;
    static emptyMap(): Char2ObjectMap<Object>;
    static fastForEach(paramarg0: Char2ObjectMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2ObjectMap<Object>): Char2ObjectMap$Entry<Object>[];
    static fastIterator(paramarg0: Char2ObjectMap<Object>): ObjectIterator<Char2ObjectMap$Entry<Object>>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ObjectMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ObjectMap<Object>;
    static synchronize(paramarg0: Char2ObjectMap<Object>): Char2ObjectMap<Object>;
    static synchronize(paramarg0: Char2ObjectMap<Object>, paramarg1: Object): Char2ObjectMap<Object>;
    static unmodifiable(paramarg0: Char2ObjectMap<Object>): Char2ObjectMap<Object>;
    private constructor()
}
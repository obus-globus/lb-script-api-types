import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceMaps extends Object {
    static EMPTY_MAP: Char2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Char2ReferenceMap<Object>;
    static fastForEach(paramarg0: Char2ReferenceMap<Object>, paramarg1: (param0: Object) => void): void;
    static fastIterable(paramarg0: Char2ReferenceMap<Object>): Char2ReferenceMap$Entry<Object>[];
    static fastIterator(paramarg0: Char2ReferenceMap<Object>): ObjectIterator<Char2ReferenceMap$Entry<Object>>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceMap<Object>;
    static synchronize(paramarg0: Char2ReferenceMap<Object>): Char2ReferenceMap<Object>;
    static synchronize(paramarg0: Char2ReferenceMap<Object>, paramarg1: Object): Char2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Char2ReferenceMap<Object>): Char2ReferenceMap<Object>;
    private constructor()
}
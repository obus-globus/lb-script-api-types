import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ReferenceMaps extends Object {
    static EMPTY_MAP: Char2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Char2ReferenceMap<Object>;
    static fastForEach(paramarg0: Char2ReferenceMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Char2ReferenceMap<Object>): K[];
    static fastIterator(paramarg0: Char2ReferenceMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceMap<Object>;
    static singleton(paramarg0: string, paramarg1: Object | null): Char2ReferenceMap<Object>;
    static synchronize(paramarg0: Char2ReferenceMap<Object>): Char2ReferenceMap<Object>;
    static synchronize(paramarg0: Char2ReferenceMap<Object>, paramarg1: Object): Char2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Char2ReferenceMap<Object>): Char2ReferenceMap<Object>;
    private constructor()
}
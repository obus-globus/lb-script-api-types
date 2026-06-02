import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceMaps extends Object {
    static EMPTY_MAP: Byte2ReferenceMaps$EmptyMap<Object>;
    static emptyMap(): Byte2ReferenceMap<Object>;
    static fastForEach(paramarg0: Byte2ReferenceMap<Object>, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Byte2ReferenceMap<Object>): K[];
    static fastIterator(paramarg0: Byte2ReferenceMap<Object>): ObjectIterator<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ReferenceMap<Object>;
    static singleton(paramarg0: number, paramarg1: Object | null): Byte2ReferenceMap<Object>;
    static synchronize(paramarg0: Byte2ReferenceMap<Object>): Byte2ReferenceMap<Object>;
    static synchronize(paramarg0: Byte2ReferenceMap<Object>, paramarg1: Object): Byte2ReferenceMap<Object>;
    static unmodifiable(paramarg0: Byte2ReferenceMap<Object>): Byte2ReferenceMap<Object>;
    private constructor()
}
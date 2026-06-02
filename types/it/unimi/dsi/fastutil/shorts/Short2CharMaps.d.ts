import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharMaps extends Object {
    static EMPTY_MAP: Short2CharMaps$EmptyMap;
    static fastForEach(paramarg0: Short2CharMap, paramarg1: (param0: Object | null) => void): void;
    static fastIterable(paramarg0: Short2CharMap): K[];
    static fastIterator(paramarg0: Short2CharMap): ObjectIterator<Short2CharMap$Entry>;
    static singleton(paramarg0: number, paramarg1: string): Short2CharMap;
    static singleton(paramarg0: number, paramarg1: string): Short2CharMap;
    static synchronize(paramarg0: Short2CharMap): Short2CharMap;
    static synchronize(paramarg0: Short2CharMap, paramarg1: Object): Short2CharMap;
    static unmodifiable(paramarg0: Short2CharMap): Short2CharMap;
    private constructor()
}
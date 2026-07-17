import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static emptyMap<V extends unknown>(): JavaMap<any, any>;
    static fastForEach<V extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: (param0: Object) => void): void;
    static fastIterable<V extends unknown>(paramarg0: JavaMap<any, any>): Long2ReferenceMap$Entry<V>[];
    static fastIterator<V extends unknown>(paramarg0: JavaMap<any, any>): ObjectIterator<Long2ReferenceMap$Entry<V>>;
    static singleton<V extends unknown>(paramarg0: number, paramarg1: V): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<V extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<V extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
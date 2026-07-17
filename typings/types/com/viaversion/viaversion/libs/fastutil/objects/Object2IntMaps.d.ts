import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2IntMaps extends Object {
    static emptyMap<K extends unknown>(): JavaMap<any, any>;
    static fastForEach<K extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown>(paramarg0: JavaMap<any, any>): Object2IntMap$Entry<K>[];
    static fastIterator<K extends unknown>(paramarg0: JavaMap<any, any>): ObjectIterator<Object2IntMap$Entry<K>>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
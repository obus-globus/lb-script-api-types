import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleMap$Entry.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleMaps extends Object {
    static EMPTY_MAP: JavaMap<any, any>;
    static emptyMap<K extends unknown>(): JavaMap<any, any>;
    static fastForEach<K extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: (param0: Object) => void): void;
    static fastIterable<K extends unknown>(paramarg0: JavaMap<any, any>): Object2DoubleMap$Entry<K>[];
    static fastIterator<K extends unknown>(paramarg0: JavaMap<any, any>): ObjectIterator<Object2DoubleMap$Entry<K>>;
    static singleton<K extends unknown>(paramarg0: K, paramarg1: number): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    static synchronize<K extends unknown>(paramarg0: JavaMap<any, any>, paramarg1: Object): JavaMap<any, any>;
    static unmodifiable<K extends unknown>(paramarg0: JavaMap<any, any>): JavaMap<any, any>;
    private constructor()
}
import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$FunctionForMapNoDefault<K extends unknown, V extends unknown> extends Object implements Function<K, V>, Serializable {
    constructor(map: JavaMap<K, V>)
    // private map: JavaMap<K, V>;
    apply(key: K): V;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
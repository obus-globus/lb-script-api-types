import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Functions$ForMapWithDefault<K extends unknown, V extends unknown> extends Object implements Function<K, V>, Serializable {
    constructor(map: Map<K, V>, defaultValue: V)
    // private defaultValue: V;
    // private map: Map<K, V>;
    apply(key: K): V;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
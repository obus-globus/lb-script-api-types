import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OrderedMapIterator } from '../../../../../org/apache/commons/collections4/OrderedMapIterator.d.ts'
import type { Unmodifiable } from '../../../../../org/apache/commons/collections4/Unmodifiable.d.ts'
export class UnmodifiableOrderedMapIterator<K extends unknown, V extends unknown> extends Object implements OrderedMapIterator<K, V>, Unmodifiable {
    static unmodifiableOrderedMapIterator<K extends unknown, V extends unknown>(paramarg0: OrderedMapIterator<K, V>): OrderedMapIterator<K, V>;
    private constructor(arg0: OrderedMapIterator<K, V>)
    // private iterator: OrderedMapIterator<K, V>;
    getKey(): K;
    getValue(): V;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    remove(): void;
    setValue(arg0: V): V;
}
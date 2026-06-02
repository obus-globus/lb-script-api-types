import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OrderedMapIterator } from '../../../../../org/apache/commons/collections4/OrderedMapIterator.d.ts'
import type { Unmodifiable } from '../../../../../org/apache/commons/collections4/Unmodifiable.d.ts'
export class UnmodifiableOrderedMapIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements OrderedMapIterator<K, V>, Unmodifiable {
    static unmodifiableOrderedMapIterator(paramarg0: OrderedMapIterator<Object, Object>): OrderedMapIterator<Object, Object>;
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
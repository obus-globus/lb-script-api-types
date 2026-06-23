import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { LinkedTreeMap$Node } from '../../../../../../../org/spongepowered/include/com/google/gson/internal/LinkedTreeMap$Node.d.ts'
export abstract class LinkedTreeMap$LinkedTreeMapIterator<T extends unknown> extends Object implements Iterator<T> {
    private constructor(null_: LinkedTreeMap$LinkedTreeMapIterator<Object>)
    // private expectedModCount: number;
    // private lastReturned: LinkedTreeMap$Node<K, V>;
    // private next: LinkedTreeMap$Node<K, V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    nextNode<K extends unknown, V extends unknown>(): LinkedTreeMap$Node<K, V>;
    remove(): void;
}
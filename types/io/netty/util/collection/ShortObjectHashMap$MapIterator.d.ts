import type { ShortObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/ShortObjectHashMap$PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ShortObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<number, V>> {
    private constructor(null_: ShortObjectHashMap$MapIterator)
    // private iter: ShortObjectHashMap$PrimitiveIterator;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<number, V>;
    remove(): void;
}
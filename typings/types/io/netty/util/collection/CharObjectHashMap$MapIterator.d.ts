import type { CharObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/CharObjectHashMap$PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class CharObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<string, V>> {
    private constructor(null_: CharObjectHashMap$MapIterator)
    // private iter: CharObjectHashMap$PrimitiveIterator;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, V>;
    remove(): void;
}
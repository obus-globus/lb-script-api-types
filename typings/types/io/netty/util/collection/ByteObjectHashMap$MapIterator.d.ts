import type { ByteObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/ByteObjectHashMap$PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ByteObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<number, V>> {
    private constructor(null_: ByteObjectHashMap$MapIterator)
    // private iter: ByteObjectHashMap$PrimitiveIterator;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<number, V>;
    remove(): void;
}
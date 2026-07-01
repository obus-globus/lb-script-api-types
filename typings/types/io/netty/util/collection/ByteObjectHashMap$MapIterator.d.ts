import type { ByteObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/ByteObjectHashMap$PrimitiveIterator.d.ts'
import type { ByteObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/ByteObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ByteObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<number, V>> {
    constructor(null_: { [key: string]: any }, arg1: ByteObjectMap$PrimitiveEntry<Object>[])
    // private iter: ByteObjectHashMap$PrimitiveIterator;
    forEachRemaining<V extends unknown>(arg0: (param0: Map$Entry<number, V>) => void): void;
    hasNext(): boolean;
    next<V extends unknown>(): Map$Entry<number, V>;
    remove(): void;
}
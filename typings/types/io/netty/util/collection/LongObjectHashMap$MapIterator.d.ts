import type { LongObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/LongObjectHashMap$PrimitiveIterator.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LongObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<number, V>> {
    private constructor(null_: LongObjectHashMap$MapIterator)
    // private iter: LongObjectHashMap$PrimitiveIterator;
    forEachRemaining<V extends Object | number | string | boolean>(arg0: (param0: Map$Entry<number, V>) => void): void;
    hasNext(): boolean;
    next<V extends Object | number | string | boolean>(): Map$Entry<number, V>;
    remove(): void;
}
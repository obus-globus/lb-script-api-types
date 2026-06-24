import type { ShortObjectHashMap$PrimitiveIterator } from '../../../../io/netty/util/collection/ShortObjectHashMap$PrimitiveIterator.d.ts'
import type { ShortObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/ShortObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ShortObjectHashMap$MapIterator extends Object implements Iterator<Map$Entry<number, V>> {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: ShortObjectMap$PrimitiveEntry<Object>[])
    // private iter: ShortObjectHashMap$PrimitiveIterator;
    forEachRemaining<V extends unknown>(arg0: (param0: Map$Entry<number, V>) => void): void;
    hasNext(): boolean;
    next<V extends unknown>(): Map$Entry<number, V>;
    remove(): void;
}
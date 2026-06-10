import type { CharObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/CharObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharObjectHashMap$PrimitiveIterator extends Object implements CharObjectMap$PrimitiveEntry<V>, Iterator<CharObjectMap$PrimitiveEntry<V>> {
    private constructor(null_: CharObjectHashMap$PrimitiveIterator)
    // private entryIndex: number;
    // private nextIndex: number;
    // private prevIndex: number;
    forEachRemaining<V extends Object | number | string | boolean>(arg0: (param0: CharObjectMap$PrimitiveEntry<V>) => void): void;
    hasNext(): boolean;
    key(): string;
    next<V extends Object | number | string | boolean>(): CharObjectMap$PrimitiveEntry<V>;
    remove(): void;
    // private scanNext(): void;
    setValue<V extends Object | number | string | boolean>(arg0: V): void;
    value<V extends Object | number | string | boolean>(): V;
}
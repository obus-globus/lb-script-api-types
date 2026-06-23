import type { ShortObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/ShortObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ShortObjectHashMap$PrimitiveIterator extends Object implements ShortObjectMap$PrimitiveEntry<V>, Iterator<ShortObjectMap$PrimitiveEntry<V>> {
    private constructor(null_: ShortObjectHashMap$PrimitiveIterator)
    // private entryIndex: number;
    // private nextIndex: number;
    // private prevIndex: number;
    forEachRemaining<V extends unknown>(arg0: (param0: ShortObjectMap$PrimitiveEntry<V>) => void): void;
    hasNext(): boolean;
    key(): number;
    next<V extends unknown>(): ShortObjectMap$PrimitiveEntry<V>;
    remove(): void;
    // private scanNext(): void;
    setValue<V extends unknown>(arg0: V): void;
    value<V extends unknown>(): V;
}
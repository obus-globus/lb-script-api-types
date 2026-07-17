import type { IntObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/IntObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class IntObjectHashMap$PrimitiveIterator extends Object implements IntObjectMap$PrimitiveEntry<V>, Iterator<IntObjectMap$PrimitiveEntry<V>> {
    private constructor(null_: { [key: string]: any })
    // private entryIndex: number;
    // private nextIndex: number;
    // private prevIndex: number;
    forEachRemaining<V extends unknown>(arg0: (param0: IntObjectMap$PrimitiveEntry<V>) => void): void;
    hasNext(): boolean;
    key(): number;
    next<V extends unknown>(): IntObjectMap$PrimitiveEntry<V>;
    remove(): void;
    // private scanNext(): void;
    setValue<V extends unknown>(arg0: V): void;
    value<V extends unknown>(): V;
}
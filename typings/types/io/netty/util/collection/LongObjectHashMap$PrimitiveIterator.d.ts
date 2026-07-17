import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { LongObjectMap$PrimitiveEntry } from '../../../../io/netty/util/collection/LongObjectMap$PrimitiveEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LongObjectHashMap$PrimitiveIterator extends Object implements LongObjectMap$PrimitiveEntry<V>, Iterator<LongObjectMap$PrimitiveEntry<V>> {
    private constructor(null_: JavaMap<any, any>)
    // private entryIndex: number;
    // private nextIndex: number;
    // private prevIndex: number;
    forEachRemaining<V extends unknown>(arg0: (param0: LongObjectMap$PrimitiveEntry<V>) => void): void;
    hasNext(): boolean;
    key(): number;
    next<V extends unknown>(): LongObjectMap$PrimitiveEntry<V>;
    remove(): void;
    // private scanNext(): void;
    setValue<V extends unknown>(arg0: V): void;
    value<V extends unknown>(): V;
}
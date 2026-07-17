import type { DefaultHeaders$HeaderEntry } from '../../../../io/netty/handler/codec/DefaultHeaders$HeaderEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class DefaultHeaders$HeaderIterator extends Object implements Iterator<Map$Entry<K, V>> {
    private constructor(null_: (Object | null)[])
    // private current: DefaultHeaders$HeaderEntry<K, V>;
    forEachRemaining<K extends unknown, V extends unknown>(arg0: (param0: Map$Entry<K, V>) => void): void;
    hasNext(): boolean;
    next<K extends unknown, V extends unknown>(): Map$Entry<K, V>;
    remove(): void;
}
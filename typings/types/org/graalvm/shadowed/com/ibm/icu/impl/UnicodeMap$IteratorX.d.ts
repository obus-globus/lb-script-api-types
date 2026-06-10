import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class UnicodeMap$IteratorX extends Object implements Iterator<Map$Entry<string, T>> {
    private constructor(null_: UnicodeMap$IteratorX)
    // private iterator: Iterator<string>;
    forEachRemaining<T extends Object | number | string | boolean>(arg0: (param0: Map$Entry<string, T>) => void): void;
    hasNext(): boolean;
    next<T extends Object | number | string | boolean>(): Map$Entry<string, T>;
    remove(): void;
}
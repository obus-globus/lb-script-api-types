import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HeadersUtils$StringEntryIterator extends Object implements Iterator<Map$Entry<string, string>> {
    constructor(arg0: Iterator<Map$Entry<CharSequence, CharSequence>>)
    // private iter: Iterator<Map$Entry<CharSequence, CharSequence>>;
    forEachRemaining(arg0: (param0: Map$Entry<string, string>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<string, string>;
    remove(): void;
}
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ReadOnlyHttp2Headers$ReadOnlyIterator extends Object implements Iterator<Map$Entry<CharSequence, CharSequence>>, Map$Entry<CharSequence, CharSequence> {
    private constructor(null_: (Object | null)[])
    // private current: AsciiString[];
    // private i: number;
    readonly key: AsciiString;
    readonly key: CharSequence;
    readonly value: AsciiString;
    readonly value: CharSequence;
    forEachRemaining(arg0: (param0: Map$Entry<CharSequence, CharSequence>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<CharSequence, CharSequence>;
    remove(): void;
    setValue(arg0: CharSequence): CharSequence;
    toString(): string;
}
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class ReadOnlyHttp2Headers$ReadOnlyValueIterator extends Object implements Iterator<CharSequence> {
    constructor(null_: (Object | null)[], arg1: CharSequence)
    // private current: AsciiString[];
    // private i: number;
    // private name: CharSequence;
    // private nameHash: number;
    // private next: AsciiString;
    // private calculateNext(): void;
    forEachRemaining(arg0: (param0: CharSequence) => void): void;
    hasNext(): boolean;
    next(): CharSequence;
    remove(): void;
}
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class LinesIterator extends Object implements Iterator<string> {
    static EXHAUSTED: number;
    static HAS_NEXT: number;
    static UNKNOWN: number;
    constructor(string: CharSequence)
    // private delimiterLength: number;
    // private delimiterStartIndex: number;
    // private state: number;
    // private string: CharSequence;
    // private tokenStartIndex: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): string;
}
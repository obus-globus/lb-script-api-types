import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class UnicodeSet$UnicodeSetIterator2 extends Object implements Iterator<string> {
    constructor(source: string[])
    // private buffer: string[];
    // private current: number;
    // private item: number;
    // private len: number;
    // private limit: number;
    // private sourceList: number[];
    // private sourceStrings: string[];
    // private stringIterator: Iterator<string>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): string;
    remove(): void;
}
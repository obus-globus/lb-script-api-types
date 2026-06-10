import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class TextTrieMap$CharIterator extends Object implements Iterator<string> {
    constructor(text: CharSequence, offset: number, ignoreCase: boolean)
    // private _ignoreCase: boolean;
    // private _nextIdx: number;
    // private _remainingChar: string;
    // private _startIdx: number;
    // private _text: CharSequence;
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    next(): string;
    nextIndex(): number;
    processedLength(): number;
    remove(): void;
}
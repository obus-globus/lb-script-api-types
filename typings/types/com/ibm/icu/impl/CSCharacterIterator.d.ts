import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CSCharacterIterator extends Object implements CharacterIterator {
    static DONE: string;
    constructor(arg0: CharSequence)
    readonly index: number;
    // private seq: CharSequence;
    clone(): Object;
    current(): string;
    first(): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(arg0: number): string;
}
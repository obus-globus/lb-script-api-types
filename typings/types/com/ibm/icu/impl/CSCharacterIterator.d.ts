import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class CSCharacterIterator extends Object implements CharacterIterator, Cloneable {
    static DONE: string;
    constructor(arg0: CharSequence)
    readonly index: number;
    // private seq: CharSequence;
    clone(): CSCharacterIterator;
    protected clone(): Object;
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
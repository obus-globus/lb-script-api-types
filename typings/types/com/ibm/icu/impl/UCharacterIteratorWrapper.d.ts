import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class UCharacterIteratorWrapper extends Object implements CharacterIterator, Cloneable {
    static DONE: string;
    constructor(arg0: UCharacterIterator)
    // private iterator: UCharacterIterator;
    clone(): UCharacterIteratorWrapper;
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
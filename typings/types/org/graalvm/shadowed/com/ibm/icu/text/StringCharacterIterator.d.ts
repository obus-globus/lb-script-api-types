import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
export class StringCharacterIterator extends Object implements CharacterIterator, Cloneable {
    static DONE: string;
    constructor(text: string)
    constructor(text: string, pos: number)
    constructor(text: string, begin: number, end: number, pos: number)
    // private begin: number;
    // private end: number;
    // private pos: number;
    readonly text: string;
    clone(): StringCharacterIterator;
    current(): string;
    equals(obj: Object | null): boolean;
    first(): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    hashCode(): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(p: number): string;
    setText(text: string): void;
}
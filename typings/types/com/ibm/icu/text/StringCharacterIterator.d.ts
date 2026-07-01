import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class StringCharacterIterator extends Object implements CharacterIterator, Cloneable {
    static DONE: string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number)
    // private begin: number;
    // private end: number;
    // private pos: number;
    readonly text: string;
    clone(): StringCharacterIterator;
    current(): string;
    equals(arg0: Object | null): boolean;
    first(): string;
    getBeginIndex(): number;
    getEndIndex(): number;
    getIndex(): number;
    hashCode(): number;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(arg0: number): string;
    setText(arg0: string): void;
}
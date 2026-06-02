import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BreakTransliterator$ReplaceableCharacterIterator extends Object implements CharacterIterator {
    static DONE: string;
    constructor(arg0: Replaceable, arg1: number, arg2: number, arg3: number)
    // private begin: number;
    // private end: number;
    // private pos: number;
    readonly text: Replaceable;
    clone(): Object;
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
    setText(arg0: Replaceable): void;
}
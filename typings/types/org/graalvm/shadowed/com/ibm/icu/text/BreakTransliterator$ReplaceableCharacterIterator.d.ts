import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
export class BreakTransliterator$ReplaceableCharacterIterator extends Object implements CharacterIterator {
    static DONE: string;
    constructor(text: Replaceable, begin: number, end: number, pos: number)
    // private begin: number;
    // private end: number;
    // private pos: number;
    readonly text: Replaceable;
    clone(): BreakTransliterator$ReplaceableCharacterIterator;
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
    setText(text: Replaceable): void;
}
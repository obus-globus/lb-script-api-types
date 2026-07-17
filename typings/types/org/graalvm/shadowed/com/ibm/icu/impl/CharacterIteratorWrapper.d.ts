import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class CharacterIteratorWrapper extends UCharacterIterator implements Cloneable {
    static DONE: number;
    static getInstance(paramsource: string[]): UCharacterIterator;
    static getInstance(paramsource: string[], paramstart: number, paramlimit: number): UCharacterIterator;
    static getInstance(paramsource: string): UCharacterIterator;
    static getInstance(paramsource: StringBuffer): UCharacterIterator;
    static getInstance(paramsource: CharacterIterator): UCharacterIterator;
    static getInstance(paramsource: Replaceable): UCharacterIterator;
    constructor(iter: CharacterIterator)
    // private iterator: CharacterIterator;
    clone(): CharacterIteratorWrapper;
    current(): number;
    getCharacterIterator(): CharacterIterator;
    getIndex(): number;
    getLength(): number;
    getText(): string;
    getText(fillIn: string[]): number;
    getText(fillIn: string[], offset: number): number;
    moveIndex(delta: number): number;
    next(): number;
    previous(): number;
    setIndex(index: number): void;
    setToLimit(): void;
}
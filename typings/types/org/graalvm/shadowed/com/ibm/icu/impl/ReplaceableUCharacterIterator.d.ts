import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class ReplaceableUCharacterIterator extends UCharacterIterator implements Cloneable {
    static DONE: number;
    static getInstance(paramsource: string[]): UCharacterIterator;
    static getInstance(paramsource: string[], paramstart: number, paramlimit: number): UCharacterIterator;
    static getInstance(paramsource: string): UCharacterIterator;
    static getInstance(paramsource: StringBuffer): UCharacterIterator;
    static getInstance(paramsource: CharacterIterator): UCharacterIterator;
    static getInstance(paramsource: Replaceable): UCharacterIterator;
    constructor(buf: StringBuffer)
    constructor(str: string)
    constructor(replaceable: Replaceable)
    // private currentIndex: number;
    // private replaceable: Replaceable;
    clone(): ReplaceableUCharacterIterator;
    current(): number;
    currentCodePoint(): number;
    getIndex(): number;
    getLength(): number;
    getText(): string;
    getText(fillIn: string[]): number;
    getText(fillIn: string[], offset: number): number;
    next(): number;
    previous(): number;
    setIndex(currentIndex: number): void;
}
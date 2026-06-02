import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReplaceableUCharacterIterator extends UCharacterIterator {
    static DONE: number;
    static getInstance(paramarg0: string[]): UCharacterIterator;
    static getInstance(paramarg0: string[], paramarg1: number, paramarg2: number): UCharacterIterator;
    static getInstance(paramarg0: Replaceable): UCharacterIterator;
    static getInstance(paramarg0: string): UCharacterIterator;
    static getInstance(paramarg0: StringBuffer): UCharacterIterator;
    static getInstance(paramarg0: CharacterIterator): UCharacterIterator;
    constructor(arg0: Replaceable)
    constructor(arg0: StringBuffer)
    constructor(arg0: string)
    // private currentIndex: number;
    // private replaceable: Replaceable;
    clone(): Object;
    current(): number;
    currentCodePoint(): number;
    getIndex(): number;
    getLength(): number;
    getText(arg0: string[], arg1: number): number;
    next(): number;
    previous(): number;
    setIndex(arg0: number): void;
}
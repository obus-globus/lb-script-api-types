import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UForwardCharacterIterator } from '../../../../com/ibm/icu/text/UForwardCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export abstract class UCharacterIterator extends Object implements UForwardCharacterIterator, Cloneable {
    static DONE: number;
    static getInstance(paramarg0: string[]): UCharacterIterator;
    static getInstance(paramarg0: string[], paramarg1: number, paramarg2: number): UCharacterIterator;
    static getInstance(paramarg0: Replaceable): UCharacterIterator;
    static getInstance(paramarg0: string): UCharacterIterator;
    static getInstance(paramarg0: StringBuffer): UCharacterIterator;
    static getInstance(paramarg0: CharacterIterator): UCharacterIterator;
    constructor()
    clone(): UCharacterIterator;
    current(): number;
    currentCodePoint(): number;
    getCharacterIterator(): CharacterIterator;
    getIndex(): number;
    getLength(): number;
    getText(): string;
    getText(arg0: string[]): number;
    getText(arg0: string[], arg1: number): number;
    moveCodePointIndex(arg0: number): number;
    moveIndex(arg0: number): number;
    next(): number;
    nextCodePoint(): number;
    previous(): number;
    previousCodePoint(): number;
    setIndex(arg0: number): void;
    setToLimit(): void;
    setToStart(): void;
}
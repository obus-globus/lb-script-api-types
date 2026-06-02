import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { UForwardCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UForwardCharacterIterator.d.ts'
export abstract class UCharacterIterator extends Object implements Cloneable, UForwardCharacterIterator {
    static DONE: number;
    static getInstance(paramsource: string[]): UCharacterIterator;
    static getInstance(paramsource: string[], paramstart: number, paramlimit: number): UCharacterIterator;
    static getInstance(paramsource: string): UCharacterIterator;
    static getInstance(paramsource: StringBuffer): UCharacterIterator;
    static getInstance(paramsource: CharacterIterator): UCharacterIterator;
    static getInstance(paramsource: Replaceable): UCharacterIterator;
    constructor()
    protected clone(): Object;
    clone(): Object;
    current(): number;
    currentCodePoint(): number;
    getCharacterIterator(): CharacterIterator;
    getIndex(): number;
    getLength(): number;
    getText(): string;
    getText(fillIn: string[]): number;
    getText(fillIn: string[], offset: number): number;
    moveCodePointIndex(delta: number): number;
    moveIndex(delta: number): number;
    next(): number;
    nextCodePoint(): number;
    previous(): number;
    previousCodePoint(): number;
    setIndex(index: number): void;
    setToLimit(): void;
    setToStart(): void;
}
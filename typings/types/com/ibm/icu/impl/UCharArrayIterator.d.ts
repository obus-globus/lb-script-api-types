import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { CharacterIterator } from '../../../../java/text/CharacterIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class UCharArrayIterator extends UCharacterIterator implements Cloneable {
    static DONE: number;
    static getInstance(paramarg0: string[]): UCharacterIterator;
    static getInstance(paramarg0: string[], paramarg1: number, paramarg2: number): UCharacterIterator;
    static getInstance(paramarg0: Replaceable): UCharacterIterator;
    static getInstance(paramarg0: string): UCharacterIterator;
    static getInstance(paramarg0: StringBuffer): UCharacterIterator;
    static getInstance(paramarg0: CharacterIterator): UCharacterIterator;
    constructor(arg0: string[], arg1: number, arg2: number)
    // private limit: number;
    // private pos: number;
    // private start: number;
    readonly text: string[];
    clone(): UCharArrayIterator;
    protected clone(): Object;
    current(): number;
    getIndex(): number;
    getLength(): number;
    getText(): string;
    getText(arg0: string[]): number;
    getText(arg0: string[], arg1: number): number;
    next(): number;
    previous(): number;
    setIndex(arg0: number): void;
}
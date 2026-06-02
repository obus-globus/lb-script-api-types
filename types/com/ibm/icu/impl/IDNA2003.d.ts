import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IDNA2003 extends Object {
    static compare(paramarg0: string, paramarg1: string, paramarg2: number): number;
    static convertIDNToASCII(paramarg0: string, paramarg1: number): StringBuffer;
    static convertIDNToUnicode(paramarg0: string, paramarg1: number): StringBuffer;
    static convertToASCII(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    static convertToUnicode(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    constructor()
}
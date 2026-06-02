import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export class IDNA2003 extends Object {
    static compare(params1: string, params2: string, paramoptions: number): number;
    static convertIDNToASCII(paramsrc: string, paramoptions: number): StringBuffer;
    static convertIDNToUnicode(paramsrc: string, paramoptions: number): StringBuffer;
    static convertToASCII(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    static convertToUnicode(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    constructor()
}
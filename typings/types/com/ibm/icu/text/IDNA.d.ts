import type { IDNA$Info } from '../../../../com/ibm/icu/text/IDNA$Info.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class IDNA extends Object {
    static ALLOW_UNASSIGNED: number;
    static CHECK_BIDI: number;
    static CHECK_CONTEXTJ: number;
    static CHECK_CONTEXTO: number;
    static DEFAULT: number;
    static NONTRANSITIONAL_TO_ASCII: number;
    static NONTRANSITIONAL_TO_UNICODE: number;
    static USE_STD3_RULES: number;
    static compare(paramarg0: UCharacterIterator, paramarg1: UCharacterIterator, paramarg2: number): number;
    static compare(paramarg0: string, paramarg1: string, paramarg2: number): number;
    static compare(paramarg0: StringBuffer, paramarg1: StringBuffer, paramarg2: number): number;
    static convertIDNToASCII(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    static convertIDNToASCII(paramarg0: string, paramarg1: number): StringBuffer;
    static convertIDNToASCII(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static convertIDNToUnicode(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    static convertIDNToUnicode(paramarg0: string, paramarg1: number): StringBuffer;
    static convertIDNToUnicode(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static convertToASCII(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    static convertToASCII(paramarg0: string, paramarg1: number): StringBuffer;
    static convertToASCII(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static convertToUnicode(paramarg0: UCharacterIterator, paramarg1: number): StringBuffer;
    static convertToUnicode(paramarg0: string, paramarg1: number): StringBuffer;
    static convertToUnicode(paramarg0: StringBuffer, paramarg1: number): StringBuffer;
    static getUTS46Instance(paramarg0: number): IDNA;
    constructor()
    labelToASCII(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    labelToUnicode(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    nameToASCII(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    nameToUnicode(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
}
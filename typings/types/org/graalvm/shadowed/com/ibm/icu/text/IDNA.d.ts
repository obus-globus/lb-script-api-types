import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { IDNA$Info } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/IDNA$Info.d.ts'
import type { UCharacterIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UCharacterIterator.d.ts'
export abstract class IDNA extends Object {
    static ALLOW_UNASSIGNED: number;
    static CHECK_BIDI: number;
    static CHECK_CONTEXTJ: number;
    static CHECK_CONTEXTO: number;
    static DEFAULT: number;
    static NONTRANSITIONAL_TO_ASCII: number;
    static NONTRANSITIONAL_TO_UNICODE: number;
    static USE_STD3_RULES: number;
    static compare(params1: string, params2: string, paramoptions: number): number;
    static compare(params1: StringBuffer, params2: StringBuffer, paramoptions: number): number;
    static compare(params1: UCharacterIterator, params2: UCharacterIterator, paramoptions: number): number;
    static convertIDNToASCII(paramsrc: string, paramoptions: number): StringBuffer;
    static convertIDNToASCII(paramsrc: StringBuffer, paramoptions: number): StringBuffer;
    static convertIDNToASCII(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    static convertIDNToUnicode(paramsrc: string, paramoptions: number): StringBuffer;
    static convertIDNToUnicode(paramsrc: StringBuffer, paramoptions: number): StringBuffer;
    static convertIDNToUnicode(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    static convertToASCII(paramsrc: string, paramoptions: number): StringBuffer;
    static convertToASCII(paramsrc: StringBuffer, paramoptions: number): StringBuffer;
    static convertToASCII(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    static convertToUnicode(paramsrc: string, paramoptions: number): StringBuffer;
    static convertToUnicode(paramsrc: StringBuffer, paramoptions: number): StringBuffer;
    static convertToUnicode(paramsrc: UCharacterIterator, paramoptions: number): StringBuffer;
    static getUTS46Instance(paramoptions: number): IDNA;
    constructor()
    labelToASCII(label: CharSequence, dest: StringBuilder, info: IDNA$Info): StringBuilder;
    labelToUnicode(label: CharSequence, dest: StringBuilder, info: IDNA$Info): StringBuilder;
    nameToASCII(name: CharSequence, dest: StringBuilder, info: IDNA$Info): StringBuilder;
    nameToUnicode(name: CharSequence, dest: StringBuilder, info: IDNA$Info): StringBuilder;
}
import type { IDNA } from '../../../../com/ibm/icu/text/IDNA.d.ts'
import type { IDNA$Info } from '../../../../com/ibm/icu/text/IDNA$Info.d.ts'
import type { UCharacterIterator } from '../../../../com/ibm/icu/text/UCharacterIterator.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class UTS46 extends IDNA {
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
    constructor(arg0: number)
    // private options: number;
    // private checkLabelBiDi(arg0: CharSequence, arg1: number, arg2: number, arg3: IDNA$Info): void;
    // private checkLabelContextO(arg0: CharSequence, arg1: number, arg2: number, arg3: IDNA$Info): void;
    // private isLabelOkContextJ(arg0: CharSequence, arg1: number, arg2: number): boolean;
    labelToASCII(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    labelToUnicode(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    // private mapDevChars(arg0: StringBuilder, arg1: number, arg2: number): number;
    // private markBadACELabel(arg0: StringBuilder, arg1: number, arg2: number, arg3: boolean, arg4: IDNA$Info): number;
    nameToASCII(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    nameToUnicode(arg0: CharSequence, arg1: StringBuilder, arg2: IDNA$Info): StringBuilder;
    // private process(arg0: CharSequence, arg1: boolean, arg2: boolean, arg3: StringBuilder, arg4: IDNA$Info): StringBuilder;
    // private processLabel(arg0: StringBuilder, arg1: number, arg2: number, arg3: boolean, arg4: IDNA$Info): number;
    // private processUnicode(arg0: CharSequence, arg1: number, arg2: number, arg3: boolean, arg4: boolean, arg5: StringBuilder, arg6: IDNA$Info): StringBuilder;
}
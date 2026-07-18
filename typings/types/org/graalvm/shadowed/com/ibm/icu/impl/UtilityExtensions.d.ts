import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { ReplaceableString } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ReplaceableString.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class UtilityExtensions extends Object {
    static appendToRule(paramrule: StringBuffer, paramtext: string, paramisLiteral: boolean, paramescapeUnprintable: boolean, paramquoteBuf: StringBuffer): void;
    static appendToRule(paramrule: StringBuffer, parammatcher: UnicodeMatcher, paramescapeUnprintable: boolean, paramquoteBuf: StringBuffer): void;
    static formatInput(paraminput: Replaceable, parampos: Transliterator$Position): string;
    static formatInput(paraminput: ReplaceableString, parampos: Transliterator$Position): string;
    static formatInput(paramappendTo: StringBuffer, paraminput: Replaceable, parampos: Transliterator$Position): StringBuffer;
    static formatInput(paramappendTo: StringBuffer, paraminput: ReplaceableString, parampos: Transliterator$Position): StringBuffer;
    constructor()
}
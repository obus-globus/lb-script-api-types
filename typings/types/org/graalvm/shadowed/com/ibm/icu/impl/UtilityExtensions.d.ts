import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { ReplaceableString } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/ReplaceableString.d.ts'
import type { Transliterator$Position } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export class UtilityExtensions extends Object {
    static appendToRule(paramrule: StringBuilder, paramtext: string, paramisLiteral: boolean, paramescapeUnprintable: boolean, paramquoteBuf: StringBuilder): void;
    static appendToRule(paramrule: StringBuilder, parammatcher: UnicodeMatcher, paramescapeUnprintable: boolean, paramquoteBuf: StringBuilder): void;
    static formatInput(paraminput: Replaceable, parampos: Transliterator$Position): string;
    static formatInput(paraminput: ReplaceableString, parampos: Transliterator$Position): string;
    static formatInput(paramappendTo: StringBuilder, paraminput: Replaceable, parampos: Transliterator$Position): StringBuilder;
    static formatInput(paramappendTo: StringBuilder, paraminput: ReplaceableString, parampos: Transliterator$Position): StringBuilder;
    constructor()
}
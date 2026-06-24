import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { ReplaceableString } from '../../../../com/ibm/icu/text/ReplaceableString.d.ts'
import type { Transliterator$Position } from '../../../../com/ibm/icu/text/Transliterator$Position.d.ts'
import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UtilityExtensions extends Object {
    static appendToRule(paramarg0: StringBuilder, paramarg1: UnicodeMatcher, paramarg2: boolean, paramarg3: StringBuilder): void;
    static appendToRule(paramarg0: StringBuilder, paramarg1: string, paramarg2: boolean, paramarg3: boolean, paramarg4: StringBuilder): void;
    static formatInput(paramarg0: Replaceable, paramarg1: Transliterator$Position): string;
    static formatInput(paramarg0: ReplaceableString, paramarg1: Transliterator$Position): string;
    static formatInput(paramarg0: StringBuilder, paramarg1: Replaceable, paramarg2: Transliterator$Position): StringBuilder;
    static formatInput(paramarg0: StringBuilder, paramarg1: ReplaceableString, paramarg2: Transliterator$Position): StringBuilder;
    constructor()
}
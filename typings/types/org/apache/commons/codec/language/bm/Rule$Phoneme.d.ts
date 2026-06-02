import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { Rule$PhonemeExpr } from '../../../../../../org/apache/commons/codec/language/bm/Rule$PhonemeExpr.d.ts'
export class Rule$Phoneme extends Object implements Rule$PhonemeExpr {
    static COMPARATOR: (param0: Rule$Phoneme) => kotlin.Boolean;
    constructor(arg0: CharSequence, arg1: Languages$LanguageSet)
    constructor(arg0: Rule$Phoneme, arg1: Rule$Phoneme)
    constructor(arg0: Rule$Phoneme, arg1: Rule$Phoneme, arg2: Languages$LanguageSet)
    readonly languages: Languages$LanguageSet;
    readonly phonemeText: StringBuilder;
    append(arg0: CharSequence): Rule$Phoneme;
    getLanguages(): Languages$LanguageSet;
    getPhonemeText(): CharSequence;
    getPhonemes(): Rule$Phoneme[];
    join(arg0: Rule$Phoneme): Rule$Phoneme;
    mergeWithLanguage(arg0: Languages$LanguageSet): Rule$Phoneme;
    size(): number;
    size(): number;
    toString(): string;
}
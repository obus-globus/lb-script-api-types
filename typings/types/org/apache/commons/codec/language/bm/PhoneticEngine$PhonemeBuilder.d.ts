import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { Rule$Phoneme } from '../../../../../../org/apache/commons/codec/language/bm/Rule$Phoneme.d.ts'
import type { Rule$PhonemeExpr } from '../../../../../../org/apache/commons/codec/language/bm/Rule$PhonemeExpr.d.ts'
export class PhoneticEngine$PhonemeBuilder extends Object {
    static empty(paramarg0: Languages$LanguageSet): PhoneticEngine$PhonemeBuilder;
    constructor(arg0: (Object | null)[], arg1: any)
    readonly phonemes: Rule$Phoneme[];
    append(arg0: CharSequence): void;
    apply(arg0: Rule$PhonemeExpr, arg1: number): void;
    getPhonemes(): Rule$Phoneme[];
    makeString(): string;
}
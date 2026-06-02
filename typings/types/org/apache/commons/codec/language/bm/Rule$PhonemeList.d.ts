import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rule$Phoneme } from '../../../../../../org/apache/commons/codec/language/bm/Rule$Phoneme.d.ts'
import type { Rule$PhonemeExpr } from '../../../../../../org/apache/commons/codec/language/bm/Rule$PhonemeExpr.d.ts'
export class Rule$PhonemeList extends Object implements Rule$PhonemeExpr {
    constructor(arg0: Rule$Phoneme[])
    // private phonemeList: Rule$Phoneme[];
    getPhonemes(): Rule$Phoneme[];
    size(): number;
    size(): number;
}
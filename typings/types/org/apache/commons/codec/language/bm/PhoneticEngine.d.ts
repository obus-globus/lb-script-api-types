import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lang } from '../../../../../../org/apache/commons/codec/language/bm/Lang.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { NameType } from '../../../../../../org/apache/commons/codec/language/bm/NameType.d.ts'
import type { PhoneticEngine$PhonemeBuilder } from '../../../../../../org/apache/commons/codec/language/bm/PhoneticEngine$PhonemeBuilder.d.ts'
import type { Rule } from '../../../../../../org/apache/commons/codec/language/bm/Rule.d.ts'
import type { RuleType } from '../../../../../../org/apache/commons/codec/language/bm/RuleType.d.ts'
export class PhoneticEngine extends Object {
    constructor(arg0: NameType, arg1: RuleType, arg2: boolean)
    constructor(arg0: NameType, arg1: RuleType, arg2: boolean, arg3: number)
    readonly concat: boolean;
    readonly lang: Lang;
    readonly maxPhonemes: number;
    readonly nameType: NameType;
    readonly ruleType: RuleType;
    // private applyFinalRules(arg0: PhoneticEngine$PhonemeBuilder, arg1: JavaMap<string, Rule[]>): PhoneticEngine$PhonemeBuilder;
    encode(arg0: string): string;
    encode(arg0: string, arg1: Languages$LanguageSet): string;
    getLang(): Lang;
    getMaxPhonemes(): number;
    getNameType(): NameType;
    getRuleType(): RuleType;
    isConcat(): boolean;
}
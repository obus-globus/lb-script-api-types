import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lang$LangRule } from '../../../../../../org/apache/commons/codec/language/bm/Lang$LangRule.d.ts'
import type { Languages } from '../../../../../../org/apache/commons/codec/language/bm/Languages.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { NameType } from '../../../../../../org/apache/commons/codec/language/bm/NameType.d.ts'
export class Lang extends Object {
    static instance(paramarg0: NameType): Lang;
    static loadFromResource(paramarg0: string, paramarg1: Languages): Lang;
    private constructor(arg0: Lang$LangRule[], arg1: Languages)
    // private languages: Languages;
    // private rules: Lang$LangRule[];
    guessLanguage(arg0: string): string;
    guessLanguages(arg0: string): Languages$LanguageSet;
}
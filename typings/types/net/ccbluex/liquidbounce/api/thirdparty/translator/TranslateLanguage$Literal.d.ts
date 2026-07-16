import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TranslateLanguage } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslateLanguage$Companion } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage$Companion.d.ts'
export class TranslateLanguage$Literal extends Object implements TranslateLanguage {
    static Companion: TranslateLanguage$Companion;
    static of(language: string): TranslateLanguage;
    constructor(literal: string)
    readonly literal: string;
}
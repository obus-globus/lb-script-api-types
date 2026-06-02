import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { NameType } from '../../../../../../org/apache/commons/codec/language/bm/NameType.d.ts'
export class Languages extends Object {
    static ANY: string;
    static ANY_LANGUAGE: Languages$LanguageSet;
    static NO_LANGUAGES: Languages$LanguageSet;
    static getInstance(paramarg0: string): Languages;
    static getInstance(paramarg0: NameType): Languages;
    private constructor(arg0: string[])
    readonly languages: string[];
    getLanguages(): string[];
}
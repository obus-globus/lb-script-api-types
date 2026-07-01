import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
export class Languages$SomeLanguages extends Languages$LanguageSet {
    static from(paramarg0: string[]): Languages$LanguageSet;
    constructor(arg0: (Object | null)[], arg1: Languages$LanguageSet)
    readonly languages: string[];
    contains(arg0: string): boolean;
    getAny(): string;
    getLanguages(): string[];
    isEmpty(): boolean;
    isSingleton(): boolean;
    merge(arg0: Languages$LanguageSet): Languages$LanguageSet;
    restrictTo(arg0: Languages$LanguageSet): Languages$LanguageSet;
    toString(): string;
}
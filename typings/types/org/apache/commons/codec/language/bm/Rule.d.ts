import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { Languages$LanguageSet } from '../../../../../../org/apache/commons/codec/language/bm/Languages$LanguageSet.d.ts'
import type { NameType } from '../../../../../../org/apache/commons/codec/language/bm/NameType.d.ts'
import type { Rule$PhonemeExpr } from '../../../../../../org/apache/commons/codec/language/bm/Rule$PhonemeExpr.d.ts'
import type { Rule$RPattern } from '../../../../../../org/apache/commons/codec/language/bm/Rule$RPattern.d.ts'
import type { RuleType } from '../../../../../../org/apache/commons/codec/language/bm/RuleType.d.ts'
export class Rule extends Object {
    static ALL: string;
    static ALL_STRINGS_RMATCHER: Rule$RPattern;
    static getInstance(paramarg0: NameType, paramarg1: RuleType, paramarg2: string): Rule[];
    static getInstance(paramarg0: NameType, paramarg1: RuleType, paramarg2: Languages$LanguageSet): Rule[];
    static getInstanceMap(paramarg0: NameType, paramarg1: RuleType, paramarg2: string): { [key: string]: Rule[] };
    static getInstanceMap(paramarg0: NameType, paramarg1: RuleType, paramarg2: Languages$LanguageSet): { [key: string]: Rule[] };
    constructor(arg0: string, arg1: string, arg2: string, arg3: Rule$PhonemeExpr)
    // private lContext: Rule$RPattern;
    readonly pattern: string;
    readonly phoneme: Rule$PhonemeExpr;
    // private rContext: Rule$RPattern;
    getLContext(): Rule$RPattern;
    getPattern(): string;
    getPhoneme(): Rule$PhonemeExpr;
    getRContext(): Rule$RPattern;
    patternAndContextMatches(arg0: CharSequence, arg1: number): boolean;
}
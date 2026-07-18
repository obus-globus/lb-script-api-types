import type { RegexLanguage } from '../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexObject } from '../../../../../com/oracle/truffle/regex/RegexObject.d.ts'
import type { RegexProfile } from '../../../../../com/oracle/truffle/regex/RegexProfile.d.ts'
import type { RegexSource } from '../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { NFA } from '../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { TRegexExecNode$LazyCaptureGroupRegexSearchNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$LazyCaptureGroupRegexSearchNode.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
import type { TRegexBacktrackingNFAExecutorNode } from '../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackingNFAExecutorNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TRegexCompiler extends Object {
    static compile(paramlanguage: RegexLanguage, paramsource: RegexSource): RegexObject;
    static compileBacktrackingExecutor(paramlanguage: RegexLanguage, paramnfa: NFA): TRegexBacktrackingNFAExecutorNode;
    static compileEagerDFAExecutor(paramlanguage: RegexLanguage, paramsource: RegexSource): TRegexDFAExecutorNode;
    static compileLazyDFAExecutor(paramlanguage: RegexLanguage, paramnfa: NFA, paramrootNodeProfile: RegexProfile, paramallowSimpleCG: boolean): TRegexExecNode$LazyCaptureGroupRegexSearchNode;
    constructor()
}
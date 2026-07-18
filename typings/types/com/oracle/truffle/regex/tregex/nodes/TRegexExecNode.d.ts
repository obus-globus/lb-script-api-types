import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexExecNode } from '../../../../../../com/oracle/truffle/regex/RegexExecNode.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexProfile } from '../../../../../../com/oracle/truffle/regex/RegexProfile.d.ts'
import type { RegexProfile$TracksRegexProfile } from '../../../../../../com/oracle/truffle/regex/RegexProfile$TracksRegexProfile.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { TRegexExecNode$NFARegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$NFARegexSearchNode.d.ts'
import type { TRegexExecNode$RunRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$RunRegexSearchNode.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Lock } from '../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexExecNode extends RegexExecNode implements RegexProfile$TracksRegexProfile {
    static create(paramast: RegexAST, paramnfa: NFA, paramrunnerNodeArg: TRegexExecNode$RunRegexSearchNode): TRegexExecNode;
    static createEntryNode(paramlanguage: RegexLanguage, paramexecutor: TRegexExecutorNode): TRegexExecutorEntryNode;
    private constructor(ast: RegexAST, backtrackingMode: boolean, runnerNode: TRegexExecNode$RunRegexSearchNode)
    // private backtrackingMode: boolean;
    // private eagerDFABailedOut: boolean;
    // private lazyDFABailedOut: boolean;
    readonly numberOfCaptureGroups: number;
    // private optimizeLock: Lock;
    readonly regexProfile: RegexProfile;
    // private runnerNode: TRegexExecNode$RunRegexSearchNode;
    // private sticky: boolean;
    execute(frame: VirtualFrame): RegexResult;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
    getEngineLabel(): string;
    getNumberOfCaptureGroups(): number;
    getRegexProfile(): RegexProfile;
    isBacktracking(): boolean;
    isNFA(): boolean;
    // private switchToEagerDFA(profile: RegexProfile): void;
    // private switchToLazyDFA(nfaNode: TRegexExecNode$NFARegexSearchNode): void;
    // private validResult(input: Object, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): boolean;
}
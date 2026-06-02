import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { TRegexExecNode$RunRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$RunRegexSearchNode.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
export class TRegexExecNode$NFARegexSearchNode extends TRegexExecNode$RunRegexSearchNode {
    static create(paramlanguage: RegexLanguage, paramnfaExecutor: TRegexExecutorNode): TRegexExecNode$NFARegexSearchNode;
    private constructor(entryNode: TRegexExecutorEntryNode)
    // private entryNode: TRegexExecutorEntryNode;
    getExecutor(): TRegexExecutorBaseNode;
    run(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
}
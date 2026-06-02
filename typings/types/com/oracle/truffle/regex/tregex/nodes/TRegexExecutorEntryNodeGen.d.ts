import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$GetCodeRangeImpreciseNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeImpreciseNode.d.ts'
import type { TruffleString$GetCodeRangeNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeNode.d.ts'
import type { TruffleString$MaterializeNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$MaterializeNode.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexExecutorEntryNodeGen extends TRegexExecutorEntryNode {
    static create(paramlanguage: RegexLanguage, paramexecutor: TRegexExecutorBaseNode): TRegexExecutorEntryNode;
    private constructor(language: RegexLanguage, executor: TRegexExecutorBaseNode)
    // private codeRangeImpreciseNode_: TruffleString$GetCodeRangeImpreciseNode;
    // private codeRangePreciseNode_: TruffleString$GetCodeRangeNode;
    // private materializeNode_: TruffleString$MaterializeNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame, arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number): Object;
}
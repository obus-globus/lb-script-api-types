import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode.d.ts'
import type { TRegexExecutorEntryNodeGen$TRegexExecutorEntryInnerNodeGen$TStringData } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNodeGen$TRegexExecutorEntryInnerNodeGen$TStringData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexExecutorEntryNodeGen$TRegexExecutorEntryInnerNodeGen extends TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode {
    static create(paramlanguage: RegexLanguage, paramexecutor: TRegexExecutorBaseNode): TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode;
    private constructor(language: RegexLanguage, executor: TRegexExecutorBaseNode)
    // private state_0_: number;
    // private tString_cache: TRegexExecutorEntryNodeGen$TRegexExecutorEntryInnerNodeGen$TStringData;
    execute(frameValue: VirtualFrame, arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: TruffleString$CodeRange): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: TruffleString, arg1Value: number, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: TruffleString$CodeRange): Object;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$GetCodeRangeImpreciseNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeImpreciseNode.d.ts'
import type { TruffleString$GetCodeRangeNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$GetCodeRangeNode.d.ts'
import type { TruffleString$MaterializeNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$MaterializeNode.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexExecutorEntryNode extends Node {
    static create(paramlanguage: RegexLanguage, paramexecutor: TRegexExecutorBaseNode): TRegexExecutorEntryNode;
    constructor(language: RegexLanguage, executor: TRegexExecutorBaseNode)
    readonly executor: TRegexExecutorBaseNode;
    // private innerNode: TRegexExecutorEntryNode$TRegexExecutorEntryInnerNode;
    doTString(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number, materializeNode: TruffleString$MaterializeNode, codeRangeImpreciseNode: TruffleString$GetCodeRangeImpreciseNode, codeRangePreciseNode: TruffleString$GetCodeRangeNode, isLatin1Profile: InlinedConditionProfile): Object;
    execute(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): Object;
    getExecutor(): TRegexExecutorBaseNode;
}
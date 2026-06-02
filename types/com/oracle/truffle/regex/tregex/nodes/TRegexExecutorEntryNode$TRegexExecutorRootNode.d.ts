import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexExecutorEntryNode$TRegexExecutorRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    private constructor(language: RegexLanguage, executor: TRegexExecutorNode, codeRange: TruffleString$CodeRange)
    // private codeRange: TruffleString$CodeRange;
    // private executor: TRegexExecutorBaseNode;
    execute(frame: VirtualFrame): Object;
    toString(): string;
}
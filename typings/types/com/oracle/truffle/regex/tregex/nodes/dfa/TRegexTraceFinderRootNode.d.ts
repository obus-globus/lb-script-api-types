import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RegexBodyNode } from '../../../../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { RegexLanguage } from '../../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { PreCalculatedResultFactory } from '../../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexTraceFinderRootNode extends RegexBodyNode {
    constructor(language: RegexLanguage, preCalculatedResults: PreCalculatedResultFactory[], entryNode: TRegexExecutorEntryNode)
    // private entryNode: TRegexExecutorEntryNode;
    // private preCalculatedResults: PreCalculatedResultFactory[];
    execute(frame: VirtualFrame): Object;
}
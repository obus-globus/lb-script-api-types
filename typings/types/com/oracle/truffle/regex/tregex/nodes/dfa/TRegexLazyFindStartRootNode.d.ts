import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RegexBodyNode } from '../../../../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { RegexLanguage } from '../../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexLazyFindStartRootNode extends RegexBodyNode {
    constructor(language: RegexLanguage, source: RegexSource, backwardNode: TRegexExecutorEntryNode, setResult: boolean)
    // private entryNode: TRegexExecutorEntryNode;
    // private setResult: boolean;
    execute(frame: VirtualFrame): Object;
    getEngineLabel(): string;
}
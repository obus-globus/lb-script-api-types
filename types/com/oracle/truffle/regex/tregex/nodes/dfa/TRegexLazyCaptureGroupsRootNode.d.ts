import type { CallTarget } from '../../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { RegexBodyNode } from '../../../../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { RegexLanguage } from '../../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexProfile } from '../../../../../../../com/oracle/truffle/regex/RegexProfile.d.ts'
import type { RegexSource } from '../../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
export class TRegexLazyCaptureGroupsRootNode extends RegexBodyNode {
    constructor(language: RegexLanguage, source: RegexSource, captureGroupNode: TRegexExecutorEntryNode, profile: RegexProfile, findStartCallTarget: CallTarget)
    // private entryNode: TRegexExecutorEntryNode;
    // private findStartCallNode: DirectCallNode;
    // private findStartCallTarget: CallTarget;
    // private profile: RegexProfile;
    execute(frame: VirtualFrame): void;
    getEngineLabel(): string;
}
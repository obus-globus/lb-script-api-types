import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RegexBodyNode } from '../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { RegexLanguage } from '../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexRootNode extends RootNode {
    static SHARED_EMPTY_FRAMEDESCRIPTOR: FrameDescriptor;
    static checkThreadInterrupted(): void;
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: RegexLanguage, body: RegexBodyNode)
    // private body: RegexBodyNode;
    execute(frame: VirtualFrame): Object;
    getBodyUnwrapped(): RegexBodyNode;
    getSource(): RegexSource;
    getSourceSection(): SourceSection;
    toString(): string;
}
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractCoverageNode } from '../../../../../com/oracle/truffle/tools/coverage/AbstractCoverageNode.d.ts'
export class BooleanCoverageNode extends AbstractCoverageNode {
    constructor(sourceSection: SourceSection, instrumentedNode: Node, isRoot: boolean, isStatement: boolean, noReset: Assumption)
    // private covered: boolean;
    // private coveredFinal: boolean;
    // private noReset: Assumption;
    isCovered(): boolean;
    onEnter(frame: VirtualFrame): void;
    reset(): void;
}
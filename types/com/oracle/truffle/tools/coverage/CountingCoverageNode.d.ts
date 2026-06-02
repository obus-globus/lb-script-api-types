import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { AbstractCoverageNode } from '../../../../../com/oracle/truffle/tools/coverage/AbstractCoverageNode.d.ts'
import type { AtomicLong } from '../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
export class CountingCoverageNode extends AbstractCoverageNode {
    constructor(sourceSection: SourceSection, instrumentedNode: Node, isRoot: boolean, isStatement: boolean)
    // private count: AtomicLong;
    getCount(): number;
    isCovered(): boolean;
    onEnter(frame: VirtualFrame): void;
    reset(): void;
}
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
export abstract class AbstractCoverageNode extends ExecutionEventNode {
    constructor(sourceSection: SourceSection, instrumentedNode: Node, isRoot: boolean, isStatement: boolean)
    // private instrumentedNode: Node;
    // private isRoot: boolean;
    // private isStatement: boolean;
    readonly sourceSection: SourceSection;
    isCovered(): boolean;
    reset(): void;
}
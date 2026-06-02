import type { InstrumentableNode } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NearestNodesCollector$LinkedNodes extends Object {
    constructor(node: InstrumentableNode)
    // private next: NearestNodesCollector$LinkedNodes;
    // private node: Node;
    append(lns: NearestNodesCollector$LinkedNodes): void;
    getInner(section: SourceSection): Node;
    getOuter(section: SourceSection): Node;
    toString(): string;
}
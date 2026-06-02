import type { NearestNodesCollector$Position } from '../../../../../com/oracle/truffle/api/instrumentation/NearestNodesCollector$Position.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultNearestNodeSearch$SortedNodes extends Object {
    private constructor()
    // private nodeOffsets: NearestNodesCollector$Position[];
    // private nodes: Node[];
    // private size: number;
    add(node: Node, position: NearestNodesCollector$Position): void;
    cutHigherThan(position: NearestNodesCollector$Position): void;
    cutLowerThan(position: NearestNodesCollector$Position): void;
    ensureCapacity(capacity: number): void;
}
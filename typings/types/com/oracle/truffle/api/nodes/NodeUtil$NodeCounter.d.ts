import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeUtil$NodeCountFilter } from '../../../../../com/oracle/truffle/api/nodes/NodeUtil$NodeCountFilter.d.ts'
import type { NodeVisitor } from '../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeUtil$NodeCounter extends Object implements NodeVisitor {
    constructor(filter: NodeUtil$NodeCountFilter)
    count: number;
    // private filter: NodeUtil$NodeCountFilter;
    visit(node: Node): boolean;
}
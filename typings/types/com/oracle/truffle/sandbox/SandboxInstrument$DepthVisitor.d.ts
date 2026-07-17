import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxInstrument$DepthVisitor extends Object implements NodeVisitor {
    constructor()
    // private currentDepth: number;
    // private maxDepth: number;
    visit(node: Node): boolean;
}
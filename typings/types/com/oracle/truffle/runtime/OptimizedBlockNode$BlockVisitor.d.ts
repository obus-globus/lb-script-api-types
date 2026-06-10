import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { OptimizedBlockNode } from '../../../../com/oracle/truffle/runtime/OptimizedBlockNode.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedBlockNode$BlockVisitor extends Object implements NodeVisitor {
    constructor(rootCompilation: OptimizedCallTarget, maxBlockSize: number)
    // private blockIndex: number;
    // private blockTargets: OptimizedCallTarget[];
    // private count: number;
    // private maxBlockSize: number;
    // private rootCompilation: OptimizedCallTarget;
    // private computeBlock<T extends Node>(blockNode: OptimizedBlockNode<T>): void;
    visit(node: Node): boolean;
}
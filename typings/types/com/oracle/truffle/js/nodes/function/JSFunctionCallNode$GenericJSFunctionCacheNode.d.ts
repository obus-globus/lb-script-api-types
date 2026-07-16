import type { IndirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$GenericJSFunctionCacheNode extends JSFunctionCallNode$AbstractCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(flags: number, next: JSFunctionCallNode$AbstractCacheNode)
    // private flags: number;
    // private indirectCallNode: IndirectCallNode;
    // private initBranch: BranchProfile;
    // private next: JSFunctionCallNode$AbstractCacheNode;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    executeCall(arguments: Object[]): Object;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
export abstract class JSFunctionCallNode$JSFunctionCacheNode extends JSFunctionCallNode$AbstractCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    getFunctionData(): JSFunctionData;
    isInstanceCache(): boolean;
}
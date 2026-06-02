import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionCallNode$JSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$JSFunctionCacheNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$DynamicBoundFunctionCallNode extends JSFunctionCallNode$JSFunctionCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isNew: boolean, isNewTarget: boolean, boundFunctionData: JSFunctionData)
    // private boundFunctionData: JSFunctionData;
    // private boundTargetCallNode: JSFunctionCallNode;
    // private isNewTarget: boolean;
    // private useDynamicThis: boolean;
    accept(function_: Object): boolean;
    // private bindExtraArguments(origArgs: Object[]): Object[];
    executeCall(arguments: Object[]): Object;
    getFunctionData(): JSFunctionData;
}
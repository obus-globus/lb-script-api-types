import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { JSFunctionCallNode$JSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$JSFunctionCacheNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSFunctionObject$Bound } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject$Bound.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$BoundFunctionInstanceCallNode extends JSFunctionCallNode$JSFunctionCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(function_: JSFunctionObject$Bound, isNew: boolean, isNewTarget: boolean)
    // private addArguments: Object[];
    // private boundFunctionObj: JSFunctionObject;
    // private boundNode: JSFunctionCallNode$AbstractCacheNode;
    // private boundThis: Object;
    // private isNewTarget: boolean;
    // private targetFunctionObj: Object;
    // private useDynamicThis: boolean;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    // private bindExtraArguments(origArgs: Object[]): Object[];
    // private checkTargetFunction(arguments: Object[]): boolean;
    executeCall(arguments: Object[]): Object;
    getFunctionData(): JSFunctionData;
    isInstanceCache(): boolean;
}
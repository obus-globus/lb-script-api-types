import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSProxyCallNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramisNew: boolean, paramisNewTarget: boolean): JSProxyCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, isNew: boolean, isNewTarget: boolean)
    // private callNode: JSFunctionCallNode;
    // private callTrapNode: JSFunctionCallNode;
    // private context: JSContext;
    // private isNew: boolean;
    // private isNewTarget: boolean;
    // private trapGetter: GetMethodNode;
    doCall(arguments: Object[], isCallable: IsCallableNode, pxTrapFunProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): Object;
    doConstruct(arguments: Object[], isConstructor: IsConstructorNode, pxTrapFunProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): Object;
    execute(arguments: Object[]): Object;
}
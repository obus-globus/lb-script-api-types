import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSInteropInvokeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropInvokeNode.d.ts'
import type { JSInteropInvokeNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropInvokeNodeGen$CachedData.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropInvokeNodeGen extends JSInteropInvokeNode {
    static create(): JSInteropInvokeNode;
    static getUncached(): JSInteropInvokeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: JSInteropInvokeNodeGen$CachedData;
    // private callNode: JSFunctionCallNode;
    // private importValueNode: ImportValueNode;
    // private isCallableNode: IsCallableNode;
    // private state_0_: number;
    // private uncached_readNode_: ReadElementNode;
    execute(arg0Value: JSDynamicObject, arg1Value: TruffleString, arg2Value: Object[]): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: TruffleString, arg2Value: Object[]): Object;
}
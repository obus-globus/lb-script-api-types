import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSOverloadedUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSOverloadedUnaryNode.d.ts'
import type { JSOverloadedUnaryNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSOverloadedUnaryNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSOverloadedUnaryNodeGen extends JSOverloadedUnaryNode {
    static create(paramoverloadedOperatorName: TruffleString): JSOverloadedUnaryNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(overloadedOperatorName: TruffleString)
    // private cached_cache: JSOverloadedUnaryNodeGen$CachedData;
    // private generic_callNode_: JSFunctionCallNode;
    // private state_0_: number;
    // private checkForPolymorphicSpecialize(oldState_0: number): void;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IsCallableNodeGen$JSFunctionShapeData } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNodeGen$JSFunctionShapeData.d.ts'
import type { IsCallableNodeGen$TruffleObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNodeGen$TruffleObject0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsCallableNodeGen extends IsCallableNode {
    static create(): IsCallableNode;
    static getUncached(): IsCallableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private jSFunctionShape_cache: IsCallableNodeGen$JSFunctionShapeData;
    // private state_0_: number;
    // private truffleObject0_cache: IsCallableNodeGen$TruffleObject0Data;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
    // private truffleObject1Boundary(state_0: number, arg0Value: Object): boolean;
}
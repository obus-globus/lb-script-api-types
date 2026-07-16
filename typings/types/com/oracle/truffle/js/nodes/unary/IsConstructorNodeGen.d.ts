import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { IsConstructorNodeGen$TruffleObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNodeGen$TruffleObject0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsConstructorNodeGen extends IsConstructorNode {
    static create(): IsConstructorNode;
    static getUncached(): IsConstructorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private truffleObject0_cache: IsConstructorNodeGen$TruffleObject0Data;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
    // private truffleObject1Boundary(state_0: number, arg0Value: Object): boolean;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNode.d.ts'
import type { IsPrimitiveNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNodeGen$ForeignObject0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsPrimitiveNodeGen extends IsPrimitiveNode {
    static create(): IsPrimitiveNode;
    static getUncached(): IsPrimitiveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject0_cache: IsPrimitiveNodeGen$ForeignObject0Data;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
    // private foreignObject1Boundary(state_0: number, arg0Value: Object): boolean;
}
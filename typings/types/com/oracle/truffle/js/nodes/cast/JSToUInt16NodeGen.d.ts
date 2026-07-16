import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToUInt16Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt16Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToUInt16NodeGen extends JSToUInt16Node {
    static create(): JSToUInt16Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private generic_toNumberNode_: JSToNumberNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeInt(arg0Value: Object): number;
}
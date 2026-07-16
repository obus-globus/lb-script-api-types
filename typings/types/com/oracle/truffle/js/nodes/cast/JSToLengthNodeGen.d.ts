import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToLengthNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToLengthNodeGen extends JSToLengthNode {
    static create(): JSToLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private object_toNumberNode_: JSToNumberNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeLong(arg0Value: Object): number;
}
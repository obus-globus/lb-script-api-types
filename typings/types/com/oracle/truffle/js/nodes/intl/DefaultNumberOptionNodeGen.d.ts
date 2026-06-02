import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { DefaultNumberOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/DefaultNumberOptionNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultNumberOptionNodeGen extends DefaultNumberOptionNode {
    static create(): DefaultNumberOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getOption_toNumberNode_: JSToNumberNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: number): number;
    executeInt(arg0Value: Object, arg1Value: number, arg2Value: number, arg3Value: number): number;
}
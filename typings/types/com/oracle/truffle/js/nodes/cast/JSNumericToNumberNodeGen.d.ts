import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSNumericToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSNumericToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSNumericToNumberNodeGen extends JSNumericToNumberNode {
    static create(): JSNumericToNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): Number;
    executeNumeric(arg0Value: Object): Number;
}
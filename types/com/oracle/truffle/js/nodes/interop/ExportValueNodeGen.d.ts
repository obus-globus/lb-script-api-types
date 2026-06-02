import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExportValueNodeGen extends ExportValueNode {
    static create(): ExportValueNode;
    static getUncached(): ExportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object, arg2Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: boolean): Object;
}
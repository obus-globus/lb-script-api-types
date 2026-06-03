import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExportValueNodeGen$Uncached extends ExportValueNode implements UnadoptableNode {
    static create(): ExportValueNode;
    static getUncached(): ExportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(value: Object): Object;
    execute(arg0Value: Object, arg1Value: Object, arg2Value: boolean): Object;
}
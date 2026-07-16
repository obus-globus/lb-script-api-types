import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSInteropGetIteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropGetIteratorNextNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropGetIteratorNextNodeGen extends JSInteropGetIteratorNextNode {
    static create(): JSInteropGetIteratorNextNode;
    static getUncached(): JSInteropGetIteratorNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private callNode_: JSFunctionCallNode;
    // private exportValueNode_: ExportValueNode;
    // private isObjectNode_: IsObjectNode;
    // private iteratorCompleteNode_: IteratorCompleteNode;
    // private iteratorValueNode_: IteratorValueNode;
    // private state_0_: number;
    execute(arg0Value: IteratorRecord, arg1Value: JavaScriptLanguage, arg2Value: Object): Object;
    // private executeAndSpecialize(arg0Value: IteratorRecord, arg1Value: JavaScriptLanguage, arg2Value: Object): Object;
}
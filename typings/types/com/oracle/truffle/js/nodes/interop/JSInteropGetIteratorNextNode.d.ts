import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSInteropCallNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropCallNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSInteropGetIteratorNextNode extends JSInteropCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDefault(iterator: IteratorRecord, language: JavaScriptLanguage, stopValue: Object, callNode: JSFunctionCallNode, isObjectNode: IsObjectNode, iteratorCompleteNode: IteratorCompleteNode, iteratorValueNode: IteratorValueNode, exportValueNode: ExportValueNode, exceptionBranch: InlinedBranchProfile): Object;
    execute(iterator: IteratorRecord, language: JavaScriptLanguage, stopValue: Object): Object;
    getIteratorNextElement(iterator: IteratorRecord, language: JavaScriptLanguage): Object;
    getIteratorNextElement(receiver: IteratorRecord, language: JavaScriptLanguage, stopValue: Object): Object;
}
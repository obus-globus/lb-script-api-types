import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$StringReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$StringReadElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$StringReadElementTypeCacheNodeGen extends ReadElementNode$StringReadElementTypeCacheNode {
    static create(): ReadElementNode$StringReadElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_indexToPropertyKeyNode_: JSToPropertyKeyNode;
    // private toArrayIndexNode_field1_: TruffleString$ReadCharUTF16Node;
    // private toArrayIndexNode_field2_: Node;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
}
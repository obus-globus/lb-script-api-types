import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$StringWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$StringWriteElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$StringWriteElementTypeCacheNodeGen extends WriteElementNode$StringWriteElementTypeCacheNode {
    static create(): WriteElementNode$StringWriteElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_indexToPropertyKeyNode_: JSToPropertyKeyNode;
    // private toArrayIndexNode_field1_: TruffleString$ReadCharUTF16Node;
    // private toArrayIndexNode_field2_: Node;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
    executeWithTargetAndIndexUnguarded(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
}
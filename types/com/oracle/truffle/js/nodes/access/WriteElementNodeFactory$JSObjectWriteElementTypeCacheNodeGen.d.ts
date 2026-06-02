import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$JSObjectWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$JSObjectWriteElementTypeCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$JSObjectWriteElementTypeCacheNodeGen extends WriteElementNode$JSObjectWriteElementTypeCacheNode {
    static create(): WriteElementNode$JSObjectWriteElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private arrayDispatch_field1_: Node;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
    executeWithTargetAndIndexUnguarded(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
    executeWithTargetAndIndexUnguarded(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
}
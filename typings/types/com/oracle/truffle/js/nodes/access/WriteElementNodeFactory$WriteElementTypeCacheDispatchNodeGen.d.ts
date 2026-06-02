import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsJSDynamicObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSDynamicObjectNode.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$JSObjectWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$JSObjectWriteElementTypeCacheNode.d.ts'
import type { WriteElementNode$WriteElementTypeCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$WriteElementTypeCacheDispatchNode.d.ts'
import type { WriteElementNodeFactory$WriteElementTypeCacheDispatchNodeGen$OtherData } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNodeFactory$WriteElementTypeCacheDispatchNodeGen$OtherData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$WriteElementTypeCacheDispatchNodeGen extends WriteElementNode$WriteElementTypeCacheDispatchNode {
    static create(): WriteElementNode$WriteElementTypeCacheDispatchNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode: IsJSDynamicObjectNode;
    // private objectHandler: WriteElementNode$JSObjectWriteElementTypeCacheNode;
    // private other_cache: WriteElementNodeFactory$WriteElementTypeCacheDispatchNodeGen$OtherData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
    executeWithTargetAndIndexUnguarded(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
    executeWithTargetAndIndexUnguarded(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: WriteElementNode): void;
}
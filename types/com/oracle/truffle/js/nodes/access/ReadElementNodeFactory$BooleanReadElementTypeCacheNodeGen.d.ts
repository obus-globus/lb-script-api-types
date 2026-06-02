import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$BooleanReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$BooleanReadElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$BooleanReadElementTypeCacheNodeGen extends ReadElementNode$BooleanReadElementTypeCacheNode {
    static create(): ReadElementNode$BooleanReadElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private boolean1_indexToPropertyKeyNode_: JSToPropertyKeyNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
}
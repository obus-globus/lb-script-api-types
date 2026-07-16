import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$ForeignObjectReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ForeignObjectReadElementTypeCacheNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$ForeignObjectReadElementTypeCacheNodeGen extends ReadElementNode$ForeignObjectReadElementTypeCacheNode {
    static create(): ReadElementNode$ForeignObjectReadElementTypeCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private classProfile__field1_: Class<Object>;
    // private state_0_: number;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: Object, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
    executeWithTargetAndIndexUnchecked(arg0Value: Object, arg1Value: number, arg2Value: Object, arg3Value: Object, arg4Value: ReadElementNode): Object;
}
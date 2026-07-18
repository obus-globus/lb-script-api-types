import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$JSObjectArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$JSObjectArrayWriteElementCacheNode.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$JSObjectArrayWriteElementCacheNodeGen extends WriteElementNode$JSObjectArrayWriteElementCacheNode {
    static create(): WriteElementNode$JSObjectArrayWriteElementCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: WriteElementNode): boolean;
    executeSetArray(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: WriteElementNode): boolean;
}
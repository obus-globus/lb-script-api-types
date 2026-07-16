import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$TypedIntArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$TypedIntArrayWriteElementCacheNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WriteElementNodeFactory$TypedIntArrayWriteElementCacheNodeGen extends WriteElementNode$TypedIntArrayWriteElementCacheNode {
    static create(paramarrayType: TypedArray): WriteElementNode$TypedIntArrayWriteElementCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(arrayType: TypedArray)
    // private state_0_: number;
    // private typedIntArray0_toIntNode_: JSToInt32Node;
    // private typedIntArray1_toDoubleNode_: JSToDoubleNode;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: WriteElementNode): boolean;
    executeSetArray(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: WriteElementNode): boolean;
}
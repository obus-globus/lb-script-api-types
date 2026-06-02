import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode$TypedIntArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$TypedIntArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$TypedIntArrayReadElementCacheNodeGen extends ReadElementNode$TypedIntArrayReadElementCacheNode {
    static create(paramarrayType: TypedArray): ReadElementNode$TypedIntArrayReadElementCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(arrayType: TypedArray)
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: Object, arg5Value: JSContext): Object;
    executeArrayGet(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: Object, arg5Value: JSContext): Object;
    executeArrayGetDouble(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: Object, arg5Value: JSContext): number;
    executeArrayGetInt(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: Object, arg5Value: JSContext): number;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ReadElementNode$ReadElementArrayDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ReadElementArrayDispatchNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReadElementNodeFactory$ReadElementArrayDispatchNodeGen extends ReadElementNode$ReadElementArrayDispatchNode {
    static create(): ReadElementNode$ReadElementArrayDispatchNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private dispatcher__field1_: Node;
    // private state_0_: number;
    executeArrayGet(arg0Value: JSDynamicObject, arg1Value: ScriptArray, arg2Value: number, arg3Value: Object, arg4Value: Object, arg5Value: JSContext): Object;
}
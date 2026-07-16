import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ReadElementNode$ArrayReadElementCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayReadElementCacheDispatchNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$ReadElementArrayDispatchNode extends JavaScriptBaseNode {
    static create(): ReadElementNode$ReadElementArrayDispatchNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDispatch(target: JSDynamicObject, arrayType: ScriptArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, dispatcher: ReadElementNode$ArrayReadElementCacheDispatchNode): Object;
    executeArrayGet(target: JSDynamicObject, array: ScriptArray, index: number, receiver: Object, defaultValue: Object, context: JSContext): Object;
}
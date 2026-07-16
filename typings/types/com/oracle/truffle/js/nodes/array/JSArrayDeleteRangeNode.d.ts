import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSArrayNextElementIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayNextElementIndexNode.d.ts'
import type { DeletePropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class JSArrayDeleteRangeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, orThrow: boolean)
    // private context: JSContext;
    // private orThrow: boolean;
    denseArray(array: JSDynamicObject, arrayType: ScriptArray, start: number, end: number, cachedArrayType: ScriptArray, deletePropertyNode: DeletePropertyNode): void;
    doUncached(array: JSDynamicObject, arrayType: ScriptArray, start: number, end: number, deletePropertyNode: DeletePropertyNode, nextElementIndexNode: JSArrayNextElementIndexNode): void;
    execute(array: JSDynamicObject, arrayType: ScriptArray, start: number, end: number): void;
    sparseArray(array: JSDynamicObject, arrayType: ScriptArray, start: number, end: number, cachedArrayType: ScriptArray, deletePropertyNode: DeletePropertyNode, nextElementIndexNode: JSArrayNextElementIndexNode): void;
}
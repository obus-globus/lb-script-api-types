import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ScriptArray } from '../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayShiftNode$ShiftJSArrayNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, array: JSArrayObject, arrayType: ScriptArray): ScriptArray;
}
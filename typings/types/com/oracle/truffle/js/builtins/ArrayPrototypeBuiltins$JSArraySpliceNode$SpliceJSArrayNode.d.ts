import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$JSArraySpliceNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArraySpliceNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ScriptArray } from '../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArraySpliceNode$SpliceJSArrayNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(array: JSArrayObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number, arrayType: ScriptArray, parent: ArrayPrototypeBuiltins$JSArraySpliceNode): void;
}
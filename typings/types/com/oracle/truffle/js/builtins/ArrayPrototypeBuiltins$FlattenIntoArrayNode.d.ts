import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ForEachIndexCallNode } from '../../../../../com/oracle/truffle/js/nodes/access/ForEachIndexCallNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$FlattenIntoArrayNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramwithCallback: boolean): ArrayPrototypeBuiltins$FlattenIntoArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, withMapCallback: boolean)
    // private forEachIndexNode: ForEachIndexCallNode;
    executeLong(target: Object, source: Object, sourceLen: number, start: number, depth: number, callback: Object, thisArg: Object): number;
    flatten(resultArray: Object, source: Object, sourceLen: number, start: number, depth: number, callback: Object, thisArg: Object, toObjectNode: JSToObjectNode): number;
    forEachIndexCall(arrayObj: Object, callbackObj: Object, thisArg: Object, fromIndex: number, length: number, initialResult: Object): void;
}
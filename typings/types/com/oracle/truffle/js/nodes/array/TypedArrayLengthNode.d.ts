import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
export abstract class TypedArrayLengthNode extends JavaScriptBaseNode {
    static create(): TypedArrayLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, typedArrayObj: JSTypedArrayObject, context: JSContext): number;
}
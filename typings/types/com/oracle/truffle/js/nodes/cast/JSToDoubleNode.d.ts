import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToDoubleNode extends JavaScriptBaseNode {
    static create(): JSToDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): number;
    doForeignObject(object: Object, recursiveToDouble: JSToDoubleNode, toPrimitiveNode: JSToPrimitiveNode): number;
    doJSObject(value: JSObject, recursiveToDouble: JSToDoubleNode, toPrimitiveNode: JSToPrimitiveNode): number;
    doSymbol(value: Symbol): number;
    execute(value: Object): number;
    executeDouble(value: Object): number;
}
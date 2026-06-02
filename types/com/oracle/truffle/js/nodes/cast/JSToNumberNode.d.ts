import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JSToNumberNode extends JavaScriptBaseNode {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(): JSToNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): Number;
    doJSObject(value: JSObject, toPrimitiveNode: JSToPrimitiveNode, toNumberNode: JSToNumberNode): Number;
    doJSOrForeignObject(value: Object, toPrimitiveNode: JSToPrimitiveNode, toNumberNode: JSToNumberNode): Number;
    doString(value: TruffleString, stringToNumberNode: JSStringToNumberNode): Number;
    doSymbol(value: Symbol): Number;
    execute(value: Object): Object;
    executeNumber(value: Object): Number;
}
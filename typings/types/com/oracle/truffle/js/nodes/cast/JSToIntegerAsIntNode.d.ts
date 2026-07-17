import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToIntegerAsIntNode extends JavaScriptBaseNode {
    static create(): JSToIntegerAsIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): number;
    doJSObject(value: JSObject, nestedToIntegerNode: JSToIntegerAsIntNode, toNumberNode: JSToNumberNode): number;
    doJSOrForeignObject(value: Object, nestedToIntegerNode: JSToIntegerAsIntNode, toNumberNode: JSToNumberNode): number;
    doString(value: TruffleString, nestedToIntegerNode: JSToIntegerAsIntNode, stringToNumberNode: JSStringToNumberNode): number;
    doSymbol(value: Symbol): number;
    executeInt(operand: Object): number;
}
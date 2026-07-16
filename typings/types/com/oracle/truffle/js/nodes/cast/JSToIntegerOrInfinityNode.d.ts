import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JSToIntegerOrInfinityNode extends JavaScriptBaseNode {
    static create(): JSToIntegerOrInfinityNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): Number;
    doDouble(value: number): number;
    doJSObject(value: JSObject, toIntOrInf: JSToIntegerOrInfinityNode, toNumberNode: JSToNumberNode): Number;
    doJSOrForeignObject(value: Object, toIntOrInf: JSToIntegerOrInfinityNode, toNumberNode: JSToNumberNode): Number;
    doString(value: TruffleString, toIntOrInf: JSToIntegerOrInfinityNode, stringToNumberNode: JSStringToNumberNode): Number;
    doSymbol(value: Symbol): Number;
    execute(value: Object): Object;
    executeNumber(value: Object): Number;
}
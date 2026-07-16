import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToInt32Node extends JavaScriptBaseNode {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(paramchild: JavaScriptNode, parambitwiseOr: boolean): JavaScriptNode;
    static create(): JSToInt32Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): number;
    doBoolean(value: boolean): number;
    doDouble(value: number): number;
    doDoubleFitsInt(value: number): number;
    doDoubleRepresentableAsLong(value: number): number;
    doDoubleRepresentableAsSafeInteger(value: number): number;
    doInteger(value: number): number;
    doJSObject(value: JSObject, toDoubleNode: JSToDoubleNode): number;
    doNull(value: Object): number;
    doSafeInteger(value: SafeInteger): number;
    doString(value: TruffleString, stringToNumberNode: JSStringToNumberNode): number;
    doSymbol(value: Symbol): number;
    doUndefined(value: Object): number;
    executeInt(operand: Object): number;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToStringNode extends JavaScriptBaseNode {
    static create(): JSToStringNode;
    static createSymbolToString(): JSToStringNode;
    static createUndefinedToEmpty(): JSToStringNode;
    static getUncached(): JSToStringNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    constructor(undefinedToEmpty: boolean, symbolToString: boolean)
    // private symbolToString: boolean;
    // private undefinedToEmpty: boolean;
    doBigInt(value: BigInt): TruffleString;
    doBoolean(value: boolean): TruffleString;
    doDouble(d: number, doubleToStringNode: JSDoubleToStringNode): TruffleString;
    doInteger(value: number, doubleToStringNode: JSDoubleToStringNode): TruffleString;
    doJSObject(value: JSDynamicObject, toPrimitiveHintStringNode: JSToPrimitiveNode, toStringNode: JSToStringNode): TruffleString;
    doLong(value: number, doubleToStringNode: JSDoubleToStringNode): TruffleString;
    doNull(value: Object): TruffleString;
    doString(value: TruffleString): TruffleString;
    doSymbol(value: Symbol): TruffleString;
    doTruffleObject(object: Object, toPrimitiveHintStringNode: JSToPrimitiveNode, toStringNode: JSToStringNode): TruffleString;
    doUndefined(value: Object): TruffleString;
    executeString(operand: Object): TruffleString;
}
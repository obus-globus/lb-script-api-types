import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JSToUInt32Node extends JavaScriptBaseNode {
    static create(): JSToUInt32Node;
    static create(paramunsignedRightShift: boolean, paramshiftValue: number): JSToUInt32Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(unsignedRightShift: boolean, shiftValue: number)
    // private shiftValue: number;
    // private unsignedRightShift: boolean;
    doBigInt(value: BigInt): number;
    doBoolean(value: boolean): number;
    doDouble(value: number): number;
    doDoubleFitsInt32Negative(value: number): number;
    doDoubleRepresentableAsLong(value: number): number;
    doInteger(value: number): number;
    doIntegerNegative(value: number): SafeInteger;
    doJSObject(value: JSObject, toNumberNode: JSToNumberNode): number;
    doNull(value: Object): number;
    doOverloadedOperator(value: JSOverloadedOperatorsObject, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doSafeInteger(value: SafeInteger): Object;
    doString(value: TruffleString, stringToNumberNode: JSStringToNumberNode): number;
    doSymbol(value: Symbol): Number;
    doUndefined(value: Object): number;
    execute(value: Object): Object;
    executeLong(value: Object): number;
    executeNumber(value: Object): Number;
    getOverloadedOperatorName(): TruffleString;
    isUnsignedRightShift(): boolean;
}
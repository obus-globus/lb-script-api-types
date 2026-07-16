import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class ToIntlMathematicalValue extends JavaScriptBaseNode {
    static create(parampartOfRange: boolean): ToIntlMathematicalValue;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(partOfRange: boolean)
    // private partOfRange: boolean;
    doBigInt(value: BigInt): Number;
    doBoolean(value: boolean): Number;
    doDouble(value: number): Number;
    doGeneric(value: Object, toPrimitiveNode: JSToPrimitiveNode, nestedToIntlMVNode: ToIntlMathematicalValue): Number;
    doLong(value: number): Number;
    doNull(value: Object): Number;
    doString(value: TruffleString): Number;
    doSymbol(value: Symbol): Number;
    doUndefined(value: Object): Number;
    executeNumber(value: Object): Number;
}
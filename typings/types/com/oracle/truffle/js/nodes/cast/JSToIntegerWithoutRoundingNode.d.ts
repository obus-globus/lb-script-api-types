import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToIntegerWithoutRoundingNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): number;
    doDoubleInfinite(value: number, errorBranch: InlinedBranchProfile): number;
    doJSOrForeignObject(value: Object, toIntOrInf: JSToIntegerWithoutRoundingNode, toNumberNode: JSToNumberNode): number;
    doString(value: TruffleString, toIntOrInf: JSToIntegerWithoutRoundingNode, stringToNumberNode: JSStringToNumberNode): number;
    doSymbol(value: Symbol): number;
    execute(value: Object): number;
    executeDouble(value: Object): number;
}
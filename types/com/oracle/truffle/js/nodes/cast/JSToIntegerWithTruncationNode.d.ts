import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JSToIntegerWithTruncationNode extends JavaScriptBaseNode {
    static create(): JSToIntegerWithTruncationNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private errorBranch: BranchProfile;
    // private isDoubleProfile: BranchProfile;
    // private isIntProfile: BranchProfile;
    // private isLongProfile: BranchProfile;
    doBigInt(value: BigInt): Number;
    doDouble(value: number): number;
    doJSOrForeignObject(value: Object, toIntegerWithTruncation: JSToIntegerWithTruncationNode, toNumberNode: JSToNumberNode): Number;
    doString(value: TruffleString, toIntegerWithTruncation: JSToIntegerWithTruncationNode, stringToNumberNode: JSStringToNumberNode): Number;
    doSymbol(value: Symbol): Number;
    execute(value: Object): Object;
    executeDouble(value: Object): number;
    executeIntOrThrow(value: Object): number;
}
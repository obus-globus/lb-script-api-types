import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BigIntPrototypeBuiltins$JSBigIntOperation } from '../../../../../com/oracle/truffle/js/builtins/BigIntPrototypeBuiltins$JSBigIntOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSBigIntObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSBigIntObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BigIntPrototypeBuiltins$JSBigIntToStringNode extends BigIntPrototypeBuiltins$JSBigIntOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    toString(thisObj: JSBigIntObject, radix: Object, radixErrorBranch: InlinedBranchProfile): TruffleString;
    toStringBigInt(thisObj: BigInt, radix: Object, radixErrorBranch: InlinedBranchProfile): TruffleString;
    toStringBigIntRadix10(thisObj: BigInt, radix: Object, radixErrorBranch: InlinedBranchProfile): TruffleString;
    // private toStringImpl(numberVal: BigInt, radix: Object, radixErrorBranch: InlinedBranchProfile): TruffleString;
    toStringNoBigInt(thisObj: Object, radix: Object): void;
    toStringRadix10(thisObj: JSBigIntObject, radix: Object, radixErrorBranch: InlinedBranchProfile): TruffleString;
}
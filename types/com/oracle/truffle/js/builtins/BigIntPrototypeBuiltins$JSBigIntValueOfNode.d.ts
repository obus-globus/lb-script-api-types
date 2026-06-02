import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BigIntPrototypeBuiltins$JSBigIntOperation } from '../../../../../com/oracle/truffle/js/builtins/BigIntPrototypeBuiltins$JSBigIntOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { BigInt } from '../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSBigIntObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSBigIntObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BigIntPrototypeBuiltins$JSBigIntValueOfNode extends BigIntPrototypeBuiltins$JSBigIntOperation {
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
    valueOf(thisObj: JSBigIntObject): BigInt;
    valueOf(thisObj: Object): void;
    valueOfBigInt(thisObj: BigInt): BigInt;
}
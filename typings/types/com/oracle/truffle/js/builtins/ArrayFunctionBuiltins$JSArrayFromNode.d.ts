import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayFunctionBuiltins$JSArrayFunctionOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayFunctionBuiltins$JSArrayFunctionOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayFunctionBuiltins$JSArrayFromNode extends ArrayFunctionBuiltins$JSArrayFunctionOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isTypedArray: boolean)
    // private callMapFnNode: JSFunctionCallNode;
    // private getIteratorMethodNode: GetMethodNode;
    // private getIteratorValueNode: IteratorValueNode;
    // private getSourceLengthNode: JSGetLengthNode;
    // private isIterable: ConditionProfile;
    // private iteratorCloseNode: IteratorCloseNode;
    // private iteratorStepNode: IteratorStepNode;
    arrayFrom(thisObj: Object, items: Object, mapFn: Object, thisArg: Object, getIteratorFromMethod: GetIteratorFromMethodNode, growProfile: InlinedBranchProfile): Object;
    arrayFromArrayLike(thisObj: Object, items: Object, mapFn: Object, thisArg: Object, mapping: boolean, setLength: boolean): Object;
    arrayFromCommon(thisObj: Object, items: Object, mapFn: Object, thisArg: Object, setLength: boolean, getIteratorFromMethod: GetIteratorFromMethodNode, growProfile: InlinedBranchProfile): Object;
    arrayFromIterable(thisObj: Object, items: Object, usingIterator: Object, mapFn: Object, thisArg: Object, mapping: boolean, getIteratorFromMethod: GetIteratorFromMethodNode, growProfile: InlinedBranchProfile): Object;
    // private arrayFromIteratorRecord(obj: Object, iteratorRecord: IteratorRecord, mapFn: Object, thisArg: Object, mapping: boolean): Object;
    callMapFn(target: Object, function_: Object, userArguments: Object[]): Object;
    getIteratorValue(iteratorResult: Object): Object;
    getSourceLength(thisObject: Object): number;
    iteratorCloseAbrupt(iterator: Object): void;
    iteratorStep(iteratorRecord: IteratorRecord): Object;
}
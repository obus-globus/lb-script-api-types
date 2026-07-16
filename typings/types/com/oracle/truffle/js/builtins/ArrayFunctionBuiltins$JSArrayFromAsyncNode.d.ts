import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayFunctionBuiltins$JSArrayFromAsyncNode$ArrayFromAsyncArgs } from '../../../../../com/oracle/truffle/js/builtins/ArrayFunctionBuiltins$JSArrayFromAsyncNode$ArrayFromAsyncArgs.d.ts'
import type { ArrayFunctionBuiltins$JSArrayFunctionOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayFunctionBuiltins$JSArrayFunctionOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateAsyncFromSyncIteratorNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateAsyncFromSyncIteratorNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { InternalCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/InternalCallNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayFunctionBuiltins$JSArrayFromAsyncNode extends ArrayFunctionBuiltins$JSArrayFunctionOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private setArgs: PropertySetNode;
    arrayFromAsync(thisObj: Object, asyncItems: Object, mapFn: Object, thisArg: Object, node: Node, newPromiseCapability: NewPromiseCapabilityNode, getAsyncIteratorMethodNode: GetMethodNode, getIteratorMethodNode: GetMethodNode, getLengthNode: JSGetLengthNode, createAsyncFromSyncIterator: CreateAsyncFromSyncIteratorNode, getIteratorFromMethodNode: GetIteratorFromMethodNode, internalCallNode: InternalCallNode, callRejectNode: JSFunctionCallNode, isAsyncIterator: InlinedConditionProfile): Object;
    // private createFunctionWithArgs(args: ArrayFunctionBuiltins$JSArrayFromAsyncNode$ArrayFromAsyncArgs, functionData: JSFunctionData): JSFunctionObject;
    // private getErrorObject(ex: AbstractTruffleException): Object;
}
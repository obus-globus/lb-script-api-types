import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseResolveNode } from '../../../../../com/oracle/truffle/js/nodes/promise/PromiseResolveNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncFromSyncIteratorPrototypeBuiltins$AsyncFromSyncBaseNode extends JSBuiltinNode {
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
    // private executePromiseMethodNode: JSFunctionCallNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private iteratorCloseNode: IteratorCloseNode;
    // private iteratorCompleteNode: IteratorCompleteNode;
    // private iteratorNextNode: IteratorNextNode;
    // private iteratorValueNode: IteratorValueNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private promiseResolveNode: PromiseResolveNode;
    // private setDoneNode: PropertySetNode;
    // private setSyncIteratorRecordNode: PropertySetNode;
    asyncFromSyncIteratorContinuation(result: Object, promiseCapability: PromiseCapabilityRecord, syncIteratorRecord: IteratorRecord, closeOnRejection: boolean): Object;
    createIteratorCloseFunction(realm: JSRealm, syncIteratorRecord: IteratorRecord): JSFunctionObject;
    createIteratorValueUnwrapFunction(realm: JSRealm, done: boolean): JSFunctionObject;
    createPromiseCapability(): PromiseCapabilityRecord;
    incompatibleReceiver(thisObj: Object, value: Object): Object;
    promiseCapabilityReject(promiseCapability: PromiseCapabilityRecord, exception: AbstractTruffleException): void;
    promiseCapabilityRejectImpl(promiseCapability: PromiseCapabilityRecord, result: Object): void;
    promiseCapabilityResolve(valueWrapperCapability: PromiseCapabilityRecord, result: Object): void;
}
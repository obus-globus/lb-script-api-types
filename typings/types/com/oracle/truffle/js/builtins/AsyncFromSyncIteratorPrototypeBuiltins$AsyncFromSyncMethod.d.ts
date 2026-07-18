import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AsyncFromSyncIteratorPrototypeBuiltins$AsyncFromSyncBaseNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncFromSyncIteratorPrototypeBuiltins$AsyncFromSyncBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncFromSyncIteratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncFromSyncIteratorObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncFromSyncIteratorPrototypeBuiltins$AsyncFromSyncMethod extends AsyncFromSyncIteratorPrototypeBuiltins$AsyncFromSyncBaseNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, closeOnRejection: boolean)
    // private closeOnRejection: boolean;
    // private executeReturnMethod: JSFunctionCallNode;
    doMethod(frame: VirtualFrame, thisObj: JSAsyncFromSyncIteratorObject, value: Object, valuePresenceProfile: InlinedConditionProfile): Object;
    getMethod(): GetMethodNode;
    processUndefinedMethod(promiseCapability: PromiseCapabilityRecord, value: Object, syncIterator: Object): Object;
}
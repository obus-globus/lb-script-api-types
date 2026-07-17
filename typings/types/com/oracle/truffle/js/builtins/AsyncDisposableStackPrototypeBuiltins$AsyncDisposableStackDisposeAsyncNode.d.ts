import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { AsyncDisposableStackPrototypeBuiltins$AsyncDisposableStackOperation } from '../../../../../com/oracle/truffle/js/builtins/AsyncDisposableStackPrototypeBuiltins$AsyncDisposableStackOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AsyncDisposeResourcesNode } from '../../../../../com/oracle/truffle/js/nodes/control/AsyncDisposeResourcesNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncDisposableStackPrototypeBuiltins$AsyncDisposableStackDisposeAsyncNode extends AsyncDisposableStackPrototypeBuiltins$AsyncDisposableStackOperation {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private asyncDisposeResourcesNode: AsyncDisposeResourcesNode;
    // private callNode: JSFunctionCallNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private callReject(promiseCapability: PromiseCapabilityRecord, error: Object): void;
    // private callResolve(promiseCapability: PromiseCapabilityRecord, value: Object): void;
    disposeAsync(thisObj: Object, errorProfile: InlinedBranchProfile): Object;
    // private getErrorObjectNode(): TryCatchNode$GetErrorObjectNode;
    // private newPromiseCapability(): PromiseCapabilityRecord;
}
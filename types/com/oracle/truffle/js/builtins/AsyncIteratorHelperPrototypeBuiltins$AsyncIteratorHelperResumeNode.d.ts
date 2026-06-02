import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { InternalCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/InternalCallNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { JSFunction$AsyncGeneratorState } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunction$AsyncGeneratorState.d.ts'
import type { Completion } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncIteratorHelperPrototypeBuiltins$AsyncIteratorHelperResumeNode extends JSBuiltinNode {
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
    // private callNode: JSFunctionCallNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private getGeneratorResumptionTargetNode: PropertyGetNode;
    // private internalCallNode: InternalCallNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    performNextOrReturn(generator: JSAsyncGeneratorObject, promiseCapability: PromiseCapabilityRecord): void;
    performResumeNext(iterator: JSAsyncGeneratorObject, completion: Completion, state: JSFunction$AsyncGeneratorState): void;
    validateAndResume(thisObj: Object): Object;
}
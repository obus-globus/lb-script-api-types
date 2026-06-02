import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WebAssemblyBuiltins$PromisifiedBuiltinNode extends JSBuiltinNode {
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
    // private errorBranch: BranchProfile;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private newPromiseCapability: NewPromiseCapabilityNode;
    // private promiseResolutionCallNode: JSFunctionCallNode;
    process(argument: Object): Object;
    promisify(argument: Object): JSPromiseObject;
}
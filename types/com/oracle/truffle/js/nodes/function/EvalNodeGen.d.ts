import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { EvalNode } from '../../../../../../com/oracle/truffle/js/nodes/function/EvalNode.d.ts'
import type { EvalNode$DirectEvalNode } from '../../../../../../com/oracle/truffle/js/nodes/function/EvalNode$DirectEvalNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EvalNodeGen extends EvalNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramfunctionNode: JavaScriptNode, paramargs: (Object | null)[], paramthisObject: JavaScriptNode, paramenv: Object, paramblockScopeSlot: JSFrameSlot): EvalNode;
    static create(paramcontext: JSContext, paramfunction: JavaScriptNode, paramargs: (Object | null)[], paramthisObject: JavaScriptNode, paramenv: Object, paramblockScopeSlot: number): EvalNode;
    static create(paramcontext: JSContext, paramfunctionNode: JavaScriptNode, paramarguments: AbstractFunctionArgumentsNode, paramdirectEvalNode: EvalNode$DirectEvalNode): EvalNode;
    static findActiveScriptOrModule(paramcallNode: Node): ScriptOrModule;
    static findBlockScopeNode(paramnode: Node): Node;
    static findCallNode(paramrealm: JSRealm): Node;
    static formatEvalOrigin(paramcallNode: Node, paramcontext: JSContext, paramdefaultName: string): string;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, functionNode: JavaScriptNode, arguments: AbstractFunctionArgumentsNode, directEvalNode: EvalNode$DirectEvalNode)
    private constructor(context: JSContext, function_: JavaScriptNode, args: JavaScriptNode[], thisObject: JavaScriptNode, env: Object, blockScopeSlot: number)
    // private evalOverridden_redirectCall_: JSFunctionCallNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, functionNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}
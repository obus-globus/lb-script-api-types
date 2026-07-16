import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { EvalNode$DirectEvalNode } from '../../../../../../com/oracle/truffle/js/nodes/function/EvalNode$DirectEvalNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EvalNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramfunctionNode: JavaScriptNode, paramargs: JavaScriptNode[], paramthisObject: JavaScriptNode, paramenv: Object, paramblockScopeSlot: JSFrameSlot): EvalNode;
    static findActiveScriptOrModule(paramcallNode: Node): ScriptOrModule;
    static findBlockScopeNode(paramnode: Node): Node;
    static findCallNode(paramrealm: JSRealm): Node;
    static formatEvalOrigin(paramcallNode: Node, paramcontext: JSContext, paramdefaultName: string): string;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, functionNode: JavaScriptNode, arguments: AbstractFunctionArgumentsNode, directEvalNode: EvalNode$DirectEvalNode)
    constructor(context: JSContext, function_: JavaScriptNode, args: JavaScriptNode[], thisObject: JavaScriptNode, env: Object, blockScopeSlot: number)
    // private arguments: AbstractFunctionArgumentsNode;
    // private context: JSContext;
    // private directEvalNode: EvalNode$DirectEvalNode;
    // private functionNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evalNotOverridden(frame: VirtualFrame, evalFunction: Object): Object;
    evalOverridden(frame: VirtualFrame, evalFunction: Object, redirectCall: JSFunctionCallNode): Object;
    hasTag(tag: Class<Tag>): boolean;
    isEvalOverridden(function_: Object): boolean;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode$InvokeNode extends JSFunctionCallNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramisNew: boolean): JSFunctionCallNode;
    static create(paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createCall(): JSFunctionCallNode;
    static createCall(paramfunction: JavaScriptNode, paramtarget: JavaScriptNode, paramarguments: JavaScriptNode[], paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createInvoke(paramtargetFunction: JSTargetableNode, paramarguments: JavaScriptNode[], paramisNew: boolean, paramisNewTarget: boolean): JSFunctionCallNode;
    static createNew(): JSFunctionCallNode;
    static createNewTarget(): JSFunctionCallNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static getUncachedCall(): JSFunctionCallNode;
    static getUncachedNew(): JSFunctionCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(targetNode: JavaScriptNode, functionTargetNode: JSTargetableNode, flags: number)
    functionTargetNode: JSTargetableNode;
    // private targetNode: JavaScriptNode;
    createArguments(frame: VirtualFrame, target: Object, function_: Object): Object[];
    execute(frame: VirtualFrame): Object;
    executeFunctionWithTarget(frame: VirtualFrame, target: Object): Object;
    executeTarget(frame: VirtualFrame): Object;
    expressionToString(): string;
    getArgumentNodes(): JavaScriptNode[];
    // private getFunctionTargetDelegate(): JSTargetableNode;
    getFunctionTargetNode(): JSTargetableNode;
    getPropertyKey(): Object;
    getTarget(): JavaScriptNode;
    materializeInstrumentableArguments(): void;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}
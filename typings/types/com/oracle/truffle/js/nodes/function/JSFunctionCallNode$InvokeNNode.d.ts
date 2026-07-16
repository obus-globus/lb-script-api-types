import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionCallNode$InvokeNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$InvokeNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$InvokeNNode extends JSFunctionCallNode$InvokeNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
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
    constructor(targetNode: JavaScriptNode, functionNode: JSTargetableNode, arguments: JavaScriptNode[], flags: number)
    constructor(functionNode: JSTargetableNode, arguments: JavaScriptNode[], flags: number)
    // private arguments: JavaScriptNode[];
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createArguments(frame: VirtualFrame, target: Object, function_: Object): Object[];
    executeFillObjectArray(frame: VirtualFrame, args: Object[], delta: number): Object[];
    getArgumentNodes(): JavaScriptNode[];
    materializeInstrumentableArguments(): void;
}
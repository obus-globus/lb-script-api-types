import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSFunctionCallNode$CallNNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$CallNNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$CallSpreadNode extends JSFunctionCallNode$CallNNode {
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
    constructor(targetNode: JavaScriptNode, functionNode: JavaScriptNode, arguments: JavaScriptNode[], flags: number)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    executeFillObjectArray(frame: VirtualFrame, args: Object[], delta: number): Object[];
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSNewNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSNewNode.d.ts'
import type { JSNewNodeGen$NewForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/function/JSNewNodeGen$NewForeignObjectData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSNewNodeGen extends JSNewNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramtargetNode: JavaScriptNode, paramarguments: AbstractFunctionArgumentsNode): JSNewNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, targetNode: JavaScriptNode, arguments: AbstractFunctionArgumentsNode)
    // private callNew: JSFunctionCallNode;
    // private newForeignObject_cache: JSNewNodeGen$NewForeignObjectData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, targetNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}
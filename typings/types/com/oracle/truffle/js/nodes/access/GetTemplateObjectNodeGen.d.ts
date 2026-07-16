import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode.d.ts'
import type { GetTemplateObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetTemplateObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetTemplateObjectNodeGen extends GetTemplateObjectNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramrawStrings: ArrayLiteralNode, paramcookedStrings: ArrayLiteralNode): GetTemplateObjectNode;
    static create(paramcontext: JSContext, paramrawStrings: ArrayLiteralNode, paramcookedStrings: ArrayLiteralNode, paramidentity: Object): GetTemplateObjectNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, rawStrings: ArrayLiteralNode, cookedStrings: ArrayLiteralNode)
    private constructor(context: JSContext, rawStrings: ArrayLiteralNode, cookedStrings: ArrayLiteralNode, identity: Object)
    // private cached_assumption0_: Assumption;
    // private cached_cachedTemplate_: JSDynamicObject;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame): JSDynamicObject;
    executeVoid(frameValue: VirtualFrame): void;
    removeCached_(): void;
}
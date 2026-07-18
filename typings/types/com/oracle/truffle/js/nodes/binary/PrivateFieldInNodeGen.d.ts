import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PrivateFieldInNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/PrivateFieldInNode.d.ts'
import type { PrivateFieldInNodeGen$Instance0Data } from '../../../../../../com/oracle/truffle/js/nodes/binary/PrivateFieldInNodeGen$Instance0Data.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrivateFieldInNodeGen extends PrivateFieldInNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): PrivateFieldInNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private fallback_isObjectNode_: IsObjectNode;
    // private instance0_cache: PrivateFieldInNodeGen$Instance0Data;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private fallbackGuard_(state_0: number, leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private instance1Boundary(state_0: number, leftNodeValue__: HiddenKey, rightNodeValue__: JSObject): Object;
    // private instance1Boundary0(state_0: number, leftNodeValue__: HiddenKey, rightNodeValue__: JSObject): boolean;
}
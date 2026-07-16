import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { InstanceofNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNode.d.ts'
import type { InstanceofNodeGen$ForeignTargetOther0Data } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNodeGen$ForeignTargetOther0Data.d.ts'
import type { InstanceofNodeGen$JSObjectData } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNodeGen$JSObjectData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InstanceofNodeGen extends InstanceofNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext): InstanceofNode;
    static create(paramcontext: JSContext, paramleft: JavaScriptNode, paramright: JavaScriptNode): InstanceofNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, left: JavaScriptNode, right: JavaScriptNode)
    // private foreignTargetOther0_cache: InstanceofNodeGen$ForeignTargetOther0Data;
    // private jSObject_cache: InstanceofNodeGen$JSObjectData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private executeBoolean_boolean4(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic5(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_double0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private foreignTargetOther1Boundary(state_0: number, leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private foreignTargetOther1Boundary0(state_0: number, leftNodeValue_: Object, rightNodeValue_: Object): Object;
    // private foreignTargetOther1Boundary1(state_0: number, leftNodeValue_: Object, rightNodeValue_: Object): boolean;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNode.d.ts'
import type { JSEqualNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSEqualNode.d.ts'
import type { JSEqualNodeGen$OverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSEqualNodeGen$OverloadedData.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSEqualNodeGen extends JSEqualNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(): JSEqualNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSEqualNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private aInterop: InteropLibrary;
    // private bInterop: InteropLibrary;
    // private isObjectNode: IsObjectNode;
    // private isPrimitiveNode: IsPrimitiveNode;
    // private nestedEqualNode: JSEqualNode;
    // private overloaded_cache: JSEqualNodeGen$OverloadedData;
    // private state_0_: number;
    // private state_1_: number;
    // private stringToDouble: JSStringToNumberNode;
    // private string_equalsNode_: TruffleString$EqualNode;
    // private toPrimitiveNode: JSToPrimitiveNode;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private executeBoolean_boolean10(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean8(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean_boolean4(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean_double6(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean_int5(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double7(state_0__: number, state_1__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double9(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double_boolean3(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double_double2(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic13(state_0__: number, state_1__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int11(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int12(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int_boolean1(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int_int0(state_0__: number, state_1: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private fallbackGuard_(state_0: number, state_1: number, leftNodeValue: Object, rightNodeValue: Object): boolean;
}
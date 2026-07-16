import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { DeletePropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { DeletePropertyNodeGen$JSObjectData } from '../../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNodeGen$JSObjectData.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DeletePropertyNodeGen extends DeletePropertyNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramstrict: boolean): DeletePropertyNode;
    static create(paramobject: JavaScriptNode, paramproperty: JavaScriptNode, paramstrict: boolean): DeletePropertyNode;
    static create(paramstrict: boolean, paramtargetNode: JavaScriptNode, parampropertyNode: JavaScriptNode): DeletePropertyNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(strict: boolean, targetNode: JavaScriptNode, propertyNode: JavaScriptNode)
    // private dynamicObjectLib: DynamicObjectLibrary;
    // private interop: InteropLibrary;
    // private jSObject_cache: DeletePropertyNodeGen$JSObjectData;
    // private state_0_: number;
    // private string_equalsNode_: TruffleString$EqualNode;
    // private toArrayIndexNode: ToArrayIndexNode;
    // private toPropertyKeyNode: JSToPropertyKeyNode;
    // private executeAndSpecialize(targetNodeValue: Object, propertyNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int2(state_0__: number, frameValue: VirtualFrame): boolean;
    executeEvaluated(targetNodeValue: Object, propertyNodeValue: Object): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    executeWithTarget(frameValue: VirtualFrame, targetNodeValue: Object): Object;
    // private executeWithTarget_generic1(state_0__: number, frameValue: VirtualFrame, targetNodeValue: Object): Object;
    // private executeWithTarget_int0(state_0__: number, frameValue: VirtualFrame, targetNodeValue: Object): Object;
}
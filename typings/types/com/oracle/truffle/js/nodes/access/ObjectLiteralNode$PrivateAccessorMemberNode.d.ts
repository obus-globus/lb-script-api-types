import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ObjectLiteralNode$PrivateClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$PrivateClassElementNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode$PrivateAccessorMemberNode extends ObjectLiteralNode$PrivateClassElementNode {
    static EMPTY: ObjectLiteralNode$ObjectLiteralMemberNode[];
    static cloneUninitialized(parammembers: ObjectLiteralNode$ObjectLiteralMemberNode[], parammaterializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, getterNode: JavaScriptNode, setterNode: JavaScriptNode, writePrivateNode: JSWriteFrameSlotNode, privateBrandSlotIndex: number)
    // private getterNode: JavaScriptNode;
    readonly privateBrandSlotIndex: number;
    // private setterNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    defineClassElement(frame: VirtualFrame, homeObject: JSObject, classElement: ClassElementDefinitionRecord): void;
    evaluateClassElementDefinition(frame: VirtualFrame, homeObject: JSObject, realm: JSRealm, decorators: Object[]): ClassElementDefinitionRecord;
    getPrivateBrandSlotIndex(): number;
    hasGetter(): boolean;
    hasSetter(): boolean;
}
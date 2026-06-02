import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ObjectLiteralNode$PrivateClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$PrivateClassElementNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode$PrivateAutoAccessorMemberNode extends ObjectLiteralNode$PrivateClassElementNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: (Object | null)[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, valueNode: JavaScriptNode, writePrivateAccessorNode: JSWriteFrameSlotNode, storageKeyNode: JavaScriptNode, privateBrandSlot: number)
    // private backingStorageMagicSetNode: PropertySetNode;
    // private getterFunctionData: JSFunctionData;
    readonly privateBrandSlotIndex: number;
    // private setterFunctionData: JSFunctionData;
    // private storageKeyNode: JavaScriptNode;
    // private valueNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    createAutoAccessorGetter(backingStorageKey: HiddenKey, realm: JSRealm): JSFunctionObject;
    createAutoAccessorSetter(backingStorageKey: HiddenKey, realm: JSRealm): JSFunctionObject;
    defineClassElement(frame: VirtualFrame, homeObject: JSObject, classElement: ClassElementDefinitionRecord): void;
    evaluateClassElementDefinition(frame: VirtualFrame, homeObject: JSObject, realm: JSRealm, decorators: Object[]): ClassElementDefinitionRecord;
    getPrivateBrandSlotIndex(): number;
}
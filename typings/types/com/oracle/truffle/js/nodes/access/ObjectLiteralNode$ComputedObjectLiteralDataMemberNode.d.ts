import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ObjectLiteralNode$ClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ClassElementNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { SetFunctionNameNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectLiteralNode$ComputedObjectLiteralDataMemberNode extends ObjectLiteralNode$ClassElementNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: Class<Tag>[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: JavaScriptNode, isStatic: boolean, attributes: number, valueNode: JavaScriptNode, isField: boolean, isAnonymousFunctionDefinition: boolean)
    // private propertyKey: JavaScriptNode;
    // private setFunctionName: SetFunctionNameNode;
    // private toPropertyKey: JSToPropertyKeyNode;
    // private valueNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    defineClassElement(frame: VirtualFrame, homeObject: JSObject, classElement: ClassElementDefinitionRecord): void;
    doGeneric(frame: VirtualFrame, receiver: JSObject, homeObject: JSObject, realm: JSRealm): void;
    doNoFieldNoFunctionDef(frame: VirtualFrame, receiver: JSObject, homeObject: JSObject, realm: JSRealm, dynamicObject: DynamicObjectLibrary): void;
    evaluateClassElementDefinition(frame: VirtualFrame, homeObject: JSObject, realm: JSRealm, decorators: Object[]): ClassElementDefinitionRecord;
    // private evaluateKey(frame: VirtualFrame): Object;
    // private evaluateValue(frame: VirtualFrame, homeObject: JSObject, key: Object, realm: JSRealm): Object;
}
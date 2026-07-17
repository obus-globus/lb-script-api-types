import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ObjectLiteralNode$ComputedObjectLiteralDataMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ComputedObjectLiteralDataMemberNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class ObjectLiteralNodeFactory$ComputedObjectLiteralDataMemberNodeGen extends ObjectLiteralNode$ComputedObjectLiteralDataMemberNode {
    static EMPTY: ObjectLiteralNode$ObjectLiteralMemberNode[];
    static cloneUninitialized(parammembers: ObjectLiteralNode$ObjectLiteralMemberNode[], parammaterializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode[];
    static create(paramkey: JavaScriptNode, paramisStatic: boolean, paramattributes: number, paramvalueNode: JavaScriptNode, paramisField: boolean, paramisAnonymousFunctionDefinition: boolean): ObjectLiteralNode$ComputedObjectLiteralDataMemberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(key: JavaScriptNode, isStatic: boolean, attributes: number, valueNode: JavaScriptNode, isField: boolean, isAnonymousFunctionDefinition: boolean)
    // private noFieldNoFunctionDef_putMember_: DynamicObject$PutNode;
    // private state_0_: number;
    // private executeAndSpecialize(frameValue: VirtualFrame, arg0Value: JSObject, arg1Value: JSObject, arg2Value: JSRealm): void;
    executeVoid(frame: VirtualFrame, obj: JSObject, realm: JSRealm): void;
    executeVoid(frameValue: VirtualFrame, arg0Value: JSObject, arg1Value: JSObject, arg2Value: JSRealm): void;
}
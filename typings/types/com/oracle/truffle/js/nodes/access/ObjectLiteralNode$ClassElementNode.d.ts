import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectLiteralNode$ClassElementNode extends ObjectLiteralNode$ObjectLiteralMemberNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: Class<Tag>[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, attributes: number)
    constructor(isStatic: boolean, attributes: number, isFieldOrStaticBlock: boolean, isAnonymousFunctionDefinition: boolean)
    // private actuallyCheckNoElementsAssumption(obj: JSObject, key: Object): void;
    checkNoElementsAssumption(obj: JSObject, key: Object): void;
    defineClassElement(frame: VirtualFrame, homeObject: JSObject, classElement: ClassElementDefinitionRecord): void;
    evaluateClassElementDefinition(frame: VirtualFrame, homeObject: JSObject, realm: JSRealm, decorators: Object[]): ClassElementDefinitionRecord;
    executeVoid(frame: VirtualFrame, obj: JSObject, realm: JSRealm): void;
    executeVoid(frame: VirtualFrame, receiver: JSObject, homeObject: JSObject, realm: JSRealm): void;
}
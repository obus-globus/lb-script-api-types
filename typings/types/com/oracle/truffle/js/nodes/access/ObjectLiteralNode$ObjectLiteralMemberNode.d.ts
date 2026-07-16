import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectLiteralNode$ObjectLiteralMemberNode extends JavaScriptBaseNode {
    static EMPTY: ObjectLiteralNode$ObjectLiteralMemberNode[];
    static cloneUninitialized(parammembers: ObjectLiteralNode$ObjectLiteralMemberNode[], parammaterializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, attributes: number)
    constructor(isStatic: boolean, attributes: number, isFieldOrStaticBlock: boolean, isAnonymousFunctionDefinition: boolean)
    readonly attributes: number;
    // private isAnonymousFunctionDefinition: boolean;
    // private isFieldOrStaticBlock: boolean;
    // private isStatic: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode;
    defineClassElement(frame: VirtualFrame, homeObject: JSObject, classElement: ClassElementDefinitionRecord): void;
    evaluateClassElementDefinition(frame: VirtualFrame, homeObject: JSObject, realm: JSRealm, decorators: Object[]): ClassElementDefinitionRecord;
    executeVoid(frame: VirtualFrame, obj: JSObject, realm: JSRealm): void;
    executeVoid(frame: VirtualFrame, receiver: JSObject, homeObject: JSObject, realm: JSRealm): void;
    getAttributes(): number;
    isAnonymousFunctionDefinition(): boolean;
    isFieldOrStaticBlock(): boolean;
    isPrivate(): boolean;
    isStatic(): boolean;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLiteralNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, parammembers: ObjectLiteralNode$ObjectLiteralMemberNode[]): ObjectLiteralNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static newAccessorMember(paramname: TruffleString, paramisStatic: boolean, paramenumerable: boolean, paramgetterNode: JavaScriptNode, paramsetterNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newAccessorMember(paramname: Object, paramisStatic: boolean, paramattributes: number, paramgetterNode: JavaScriptNode, paramsetterNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newAutoAccessor(paramname: TruffleString, paramisStatic: boolean, paramenumerable: boolean, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newComputedAccessorMember(paramname: JavaScriptNode, paramisStatic: boolean, paramenumerable: boolean, paramgetter: JavaScriptNode, paramsetter: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newComputedAutoAccessor(paramkeyNode: JavaScriptNode, paramisStatic: boolean, paramenumerable: boolean, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newComputedDataMember(paramname: JavaScriptNode, paramisStatic: boolean, paramenumerable: boolean, paramvalueNode: JavaScriptNode, paramisField: boolean, paramisAnonymousFunctionDefinition: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newComputedDataMember(paramname: JavaScriptNode, paramisStatic: boolean, paramattributes: number, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newDataMember(paramname: TruffleString, paramisStatic: boolean, paramenumerable: boolean, paramvalueNode: JavaScriptNode, paramisField: boolean): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newDataMember(paramname: Object, paramisStatic: boolean, paramattributes: number, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newPrivateAccessorMember(paramisStatic: boolean, paramgetterNode: JavaScriptNode, paramsetterNode: JavaScriptNode, paramwritePrivateNode: JSWriteFrameSlotNode, paramprivateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newPrivateAutoAccessorMember(paramisStatic: boolean, paramvalueNode: JavaScriptNode, paramwritePrivateAccessor: JSWriteFrameSlotNode, paramstorageKey: JavaScriptNode, paramprivateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newPrivateFieldMember(paramname: JavaScriptNode, paramisStatic: boolean, paramvalueNode: JavaScriptNode, paramwritePrivateNode: JSWriteFrameSlotNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newPrivateMethodMember(paramprivateName: TruffleString, paramisStatic: boolean, paramvalueNode: JavaScriptNode, paramwritePrivateNode: JSWriteFrameSlotNode, paramprivateBrandSlotIndex: number): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newProtoMember(paramname: TruffleString, paramisStatic: boolean, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newSpreadObjectMember(paramisStatic: boolean, paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static newStaticBlockMember(paramvalueNode: JavaScriptNode): ObjectLiteralNode$ObjectLiteralMemberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(members: ObjectLiteralNode$ObjectLiteralMemberNode[], objectCreateNode: CreateObjectNode, prototypeExpression: JavaScriptNode)
    // private members: ObjectLiteralNode$ObjectLiteralMemberNode[];
    // private objectCreateNode: CreateObjectNode;
    // private prototypeExpression: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): JSObject;
    // private executeWithObject(frame: VirtualFrame, ret: JSObject, realm: JSRealm): JSObject;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}
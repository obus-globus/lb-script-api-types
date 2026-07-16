import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ClassElementNode.d.ts'
import type { ObjectLiteralNode$ObjectLiteralMemberNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ObjectLiteralMemberNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export abstract class ObjectLiteralNode$PrivateClassElementNode extends ObjectLiteralNode$ClassElementNode {
    static EMPTY: ObjectLiteralNode$ObjectLiteralMemberNode[];
    static cloneUninitialized(parammembers: ObjectLiteralNode$ObjectLiteralMemberNode[], parammaterializedTags: Class<Tag>[]): ObjectLiteralNode$ObjectLiteralMemberNode[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, isFieldOrStaticBlock: boolean, writePrivateNode: JSWriteFrameSlotNode)
    // private writePrivateNode: JSWriteFrameSlotNode;
    getPrivateBrandSlotIndex(): number;
    getPrivateMemberSlotIndex(): number;
    getPrivateScopeNode(): ScopeFrameNode;
    isPrivate(): boolean;
}
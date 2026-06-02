import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { ObjectLiteralNode$ClassElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ObjectLiteralNode$ClassElementNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ObjectLiteralNode$PrivateClassElementNode extends ObjectLiteralNode$ClassElementNode {
    static EMPTY: (Object | null)[];
    static cloneUninitialized(parammembers: (Object | null)[], parammaterializedTags: (Object | null)[]): (Object | null)[];
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isStatic: boolean, isFieldOrStaticBlock: boolean, writePrivateNode: JSWriteFrameSlotNode)
    // private writePrivateNode: JSWriteFrameSlotNode;
    getPrivateBrandSlotIndex(): number;
    getPrivateMemberSlotIndex(): number;
    getPrivateScopeNode(): ScopeFrameNode;
    isPrivate(): boolean;
}
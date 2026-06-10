import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { RepeatableNode } from '../../../../../../com/oracle/truffle/js/nodes/RepeatableNode.d.ts'
import type { FrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FrameSlotNode.d.ts'
import type { ScopeFrameNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ScopeFrameNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSReadFrameSlotNode extends FrameSlotNode implements ReadNode, RepeatableNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramdesc: FrameDescriptor, paramslotIndex: number): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static create(paramslot: JSFrameSlot, paramlevelFrameNode: ScopeFrameNode, paramhasTemporalDeadZone: boolean): JSReadFrameSlotNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(slot: number, identifier: Object, hasTemporalDeadZone: boolean)
    // private hasTemporalDeadZone: boolean;
    expressionToString(): string;
    getNodeObject(): Object;
    hasTag(tag: Class<Tag>): boolean;
    hasTemporalDeadZone(): boolean;
}
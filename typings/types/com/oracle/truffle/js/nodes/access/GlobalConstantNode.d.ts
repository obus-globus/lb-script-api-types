import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { GlobalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalObjectNode.d.ts'
import type { JSConstantNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSConstantNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlobalConstantNode extends JSTargetableNode implements ReadNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createGlobalConstant(parampropertyName: TruffleString, paramvalue: Object): JSTargetableNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(propertyName: TruffleString, constantNode: JSConstantNode)
    // private constantNode: JSConstantNode;
    // private globalObjectNode: GlobalObjectNode;
    // private propertyName: TruffleString;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeDouble(frame: VirtualFrame): number;
    executeInt(frame: VirtualFrame): number;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    getNodeObject(): Object;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    toString(): string;
}
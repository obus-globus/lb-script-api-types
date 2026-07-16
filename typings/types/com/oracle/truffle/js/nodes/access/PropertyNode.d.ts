import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ReadNode } from '../../../../../../com/oracle/truffle/js/nodes/ReadNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyNode extends JSTargetableNode implements ReadNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createGetHidden(paramctx: JSContext, paramtarget: JavaScriptNode, paramhiddenKey: HiddenKey): PropertyNode;
    static createProperty(paramctx: JSContext, paramtarget: JavaScriptNode, parampropertyKey: Object): PropertyNode;
    static createProperty(paramctx: JSContext, paramtarget: JavaScriptNode, parampropertyKey: Object, parammethod: boolean): PropertyNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, target: JavaScriptNode, propertyKey: Object, getOwnProperty: boolean, method: boolean)
    // private cache: PropertyGetNode;
    readonly target: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeDouble(frame: VirtualFrame): number;
    executeDouble(targetValue: Object, receiverValue: Object): number;
    executeInt(frame: VirtualFrame): number;
    executeInt(targetValue: Object, receiverValue: Object): number;
    executeWithTarget(frame: VirtualFrame, targetValue: Object): Object;
    executeWithTarget(targetValue: Object): Object;
    executeWithTarget(targetValue: Object, receiverValue: Object): Object;
    expressionToString(): string;
    getContext(): JSContext;
    getNodeObject(): Object;
    getPropertyKey(): Object;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    isMethod(): boolean;
    isOwnProperty(): boolean;
    // private isScopeAccess(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    toString(): string;
}
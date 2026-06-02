import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSMaterializedInvokeTargetableNode$MaterializedTargetablePropertyNode extends PropertyNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createGetHidden(paramctx: JSContext, paramtarget: JavaScriptNode, paramhiddenKey: HiddenKey): PropertyNode;
    static createProperty(paramctx: JSContext, paramtarget: JavaScriptNode, parampropertyKey: Object): PropertyNode;
    static createProperty(paramctx: JSContext, paramtarget: JavaScriptNode, parampropertyKey: Object, parammethod: boolean): PropertyNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(target: PropertyNode)
    constructor(context: JSContext, target: JavaScriptNode, propertyKey: Object, getOwnProperty: boolean, method: boolean)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    executeWithTarget(frame: VirtualFrame, targetValue: Object): Object;
    hasTag(tag: Class<Tag>): boolean;
    isInstrumentable(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}
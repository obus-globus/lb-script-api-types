import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { JSTargetableWriteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableWriteNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WritePropertyNode extends JSTargetableWriteNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramtarget: JavaScriptNode, parampropertyKey: Object, paramrhs: JavaScriptNode, paramctx: JSContext, paramisStrict: boolean): WritePropertyNode;
    static create(paramtarget: JavaScriptNode, parampropertyKey: Object, paramrhs: JavaScriptNode, paramctx: JSContext, paramisStrict: boolean, paramisGlobal: boolean, paramverifyHasProperty: boolean): WritePropertyNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(target: JavaScriptNode, rhs: JavaScriptNode, propertyKey: Object, isGlobal: boolean, context: JSContext, isStrict: boolean, verifyHasProperty: boolean)
    // private cache: PropertySetNode;
    // private hasProperty: HasPropertyCacheNode;
    // private referenceErrorBranchEntered: boolean;
    // private rhsNode: JavaScriptNode;
    // private targetNode: JavaScriptNode;
    // private valueState: number;
    // private verifyHasProperty: boolean;
    // private bindingExists(target: Object): boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    // private executeAndSpecialize(frame: VirtualFrame, target: Object, receiver: Object): void;
    executeDouble(frame: VirtualFrame): number;
    // private executeDoubleEvaluated(obj: Object, value: number, receiver: Object): number;
    // private executeEvaluated(obj: Object, value: Object, receiver: Object): void;
    executeInt(frame: VirtualFrame): number;
    // private executeIntEvaluated(obj: Object, value: number, receiver: Object): number;
    executeVoid(frame: VirtualFrame): void;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    executeWithValue(obj: Object, value: Object): Object;
    executeWrite(frame: VirtualFrame, value: Object): void;
    getKey(): Object;
    getNodeObject(): Object;
    getRhs(): JavaScriptNode;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    isGlobal(): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    // private isScopeAccess(): boolean;
    // private isUnresolvableReference(target: Object): boolean;
    // private materializationNeeded(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    // private unresolvablePropertyInStrictMode(thisObj: Object): void;
    // private verifyBindingStillExists(target: Object): void;
}
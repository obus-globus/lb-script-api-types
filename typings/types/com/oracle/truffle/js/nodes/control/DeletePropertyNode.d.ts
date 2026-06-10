import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { JSArrayDeleteIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayDeleteIndexNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSGlobalObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSGlobalObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DeletePropertyNode extends JSTargetableNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramstrict: boolean): DeletePropertyNode;
    static create(paramobject: JavaScriptNode, paramproperty: JavaScriptNode, paramstrict: boolean): DeletePropertyNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(strict: boolean, targetNode: JavaScriptNode, propertyNode: JavaScriptNode)
    // private propertyNode: JavaScriptNode;
    // private strict: boolean;
    // private targetNode: JavaScriptNode;
    arrayElementInt(target: Object, index: number, interop: InteropLibrary): boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doJSGlobalObject(targetObject: JSGlobalObject, key: Object, toPropertyKeyNode: JSToPropertyKeyNode, dynamicObjectLib: DynamicObjectLibrary): boolean;
    doJSObject(targetObject: JSDynamicObject, key: Object, node: Node, isArrayNode: IsArrayNode, arrayProfile: InlinedConditionProfile, toArrayIndexNode: ToArrayIndexNode, arrayIndexProfile: InlinedConditionProfile, deleteArrayIndexNode: JSArrayDeleteIndexNode, jsclassProfile: JSClassProfile, toPropertyKeyNode: JSToPropertyKeyNode): boolean;
    doJSOrdinaryObject(targetObject: JSDynamicObject, key: Object, toPropertyKeyNode: JSToPropertyKeyNode, dynamicObjectLib: DynamicObjectLibrary): boolean;
    doOther(target: Object, property: Object, toPropertyKeyNode: JSToPropertyKeyNode): boolean;
    doString(target: TruffleString, property: Object, toArrayIndexNode: ToArrayIndexNode, equalsNode: TruffleString$EqualNode): boolean;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeEvaluated(objectResult: Object, propertyResult: Object): boolean;
    foreignObject(target: Object, key: Object, interop: InteropLibrary, toArrayIndexNode: ToArrayIndexNode, toPropertyKeyNode: JSToPropertyKeyNode): boolean;
    getNodeObject(): Object;
    getTarget(): JavaScriptNode;
    hasTag(tag: Class<Tag>): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
    // private materializationNeeded(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    member(target: Object, name: TruffleString, interop: InteropLibrary): boolean;
}
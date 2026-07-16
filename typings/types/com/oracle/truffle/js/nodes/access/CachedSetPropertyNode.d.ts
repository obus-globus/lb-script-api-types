import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertySetNode.d.ts'
import type { JSProxyPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyPropertySetNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ToArrayIndexNoToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNoToPropertyKeyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CachedSetPropertyNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, strict: boolean, setOwn: boolean, superProperty: boolean)
    // private context: JSContext;
    // private setOwn: boolean;
    // private strict: boolean;
    // private superProperty: boolean;
    createSet(key: Object): PropertySetNode;
    doArrayIndex(target: JSDynamicObject, key: Object, value: Object, receiver: Object, toArrayIndexNode: ToArrayIndexNoToPropertyKeyNode, index: number, jsclassProfile: JSClassProfile): void;
    // private doArrayIndexLong(target: JSDynamicObject, index: number, value: Object, receiver: Object, jsclass: JSClass): void;
    doCachedKey(target: JSDynamicObject, key: Object, value: Object, receiver: Object, cachedKey: Object, propertyNode: PropertySetNode, equalsNode: TruffleString$EqualNode): void;
    doGeneric(target: JSDynamicObject, key: Object, value: Object, receiver: Object, node: Node, toArrayIndexNode: ToArrayIndexNode, getType: InlinedConditionProfile, jsclassProfile: JSClassProfile, highFrequency: InlinedConditionProfile, hotKey: FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertySetNode, equalsNode: TruffleString$EqualNode): void;
    doIntIndex(target: JSDynamicObject, index: number, value: Object, receiver: Object, jsclassProfile: JSClassProfile): void;
    doProxy(target: JSDynamicObject, index: Object, value: Object, receiver: Object, proxySet: JSProxyPropertySetNode): void;
    execute(target: JSDynamicObject, propertyKey: Object, value: Object, receiver: Object): void;
}
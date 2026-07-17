import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSGetOwnPropertyNode$GetPropertyProxyValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode$GetPropertyProxyValueNode.d.ts'
import type { JSArrayGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSArrayGetOwnPropertyNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSStringObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSStringObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSGetOwnPropertyNode extends JavaScriptBaseNode {
    static create(): JSGetOwnPropertyNode;
    static create(paramneedValue: boolean): JSGetOwnPropertyNode;
    static create(paramneedValue: boolean, paramneedEnumerability: boolean, paramneedConfigurability: boolean, paramneedWritability: boolean, paramallowCaching: boolean): JSGetOwnPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(needValue: boolean, needEnumerability: boolean, needConfigurability: boolean, needWritability: boolean, allowCaching: boolean)
    // private allowCaching: boolean;
    // private getPropertyProxyValueNode: JSGetOwnPropertyNode$GetPropertyProxyValueNode;
    // private hasPropertyBranch: ConditionProfile;
    // private isAccessorPropertyBranch: ConditionProfile;
    // private isDataPropertyBranch: ConditionProfile;
    // private needConfigurability: boolean;
    // private needEnumerability: boolean;
    // private needValue: boolean;
    // private needWritability: boolean;
    // private seenNonArrayIndex: boolean;
    array(thisObj: JSArrayObject, propertyKey: Object, node: Node, toArrayIndexNode: ToArrayIndexNode, arrayGetOwnProperty: JSArrayGetOwnPropertyNode, noSuchElementBranch: InlinedBranchProfile): PropertyDescriptor;
    cachedOrdinary(thisObj: JSDynamicObject, propertyKey: Object, cachedShape: Shape, cachedPropertyKey: Object, cachedProperty: Property, equalsNode: TruffleString$EqualNode): PropertyDescriptor;
    execute(object: Object, key: Object): PropertyDescriptor;
    // private getDataPropertyValue(thisObj: JSDynamicObject, prop: Property): Object;
    getOwnPropertyString(thisObj: JSStringObject, key: Object, stringCaseProfile: InlinedConditionProfile): PropertyDescriptor;
    // private getPropertyProxyValue(obj: JSDynamicObject, propertyProxy: Object): Object;
    // private ordinaryGetOwnProperty(thisObj: JSDynamicObject, prop: Property): PropertyDescriptor;
    // private toArrayIndex(propertyKey: Object, toArrayIndexNode: ToArrayIndexNode): number;
    uncachedOrdinary(thisObj: JSDynamicObject, propertyKey: Object): PropertyDescriptor;
}
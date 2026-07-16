import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { PropertySetNode$ForeignPropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$ForeignPropertySetNode.d.ts'
import type { PropertySetNode$SetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$SetCacheNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode$GenericPropertySetNode extends PropertySetNode$SetCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private foreignSetNode: PropertySetNode$ForeignPropertySetNode;
    // private isForeignObject: ConditionProfile;
    // private isObject: ConditionProfile;
    // private isStrictSymbol: ConditionProfile;
    // private jsclassProfile: JSClassProfile;
    // private toObjectNode: JSToObjectNode;
    setValue(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueBoolean(thisObj: Object, value: boolean, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    setValueDouble(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
    // private setValueInDynamicObject(thisObj: Object, value: Object, receiver: Object, root: PropertySetNode): void;
    setValueInt(thisObj: Object, value: number, receiver: Object, root: PropertySetNode, guard: boolean): boolean;
}
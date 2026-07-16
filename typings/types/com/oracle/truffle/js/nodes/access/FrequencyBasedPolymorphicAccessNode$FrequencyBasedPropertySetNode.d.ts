import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { FrequencyBasedPolymorphicAccessNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FrequencyBasedPolymorphicAccessNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertySetNode extends FrequencyBasedPolymorphicAccessNode<PropertySetNode> {
    static create(paramcontext: JSContext, paramsetOwn: boolean, paramisStrict: boolean, paramsuperProperty: boolean): FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertySetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(setOwn: boolean, isStrict: boolean, superProperty: boolean, size: number)
    // private highFrequencyKeys: PropertySetNode[];
    // private setOwn: boolean;
    // private strict: boolean;
    // private superProperty: boolean;
    // private compiledSet(target: JSDynamicObject, key: Object, value: Object, receiver: Object, equalsNode: TruffleString$EqualNode): boolean;
    executeFastSet(target: JSDynamicObject, key: Object, value: Object, receiver: Object, equalsNode: TruffleString$EqualNode): boolean;
    getHighFrequencyNodes(): PropertySetNode[];
    isAdoptable(): boolean;
    setHighFrequencyNode(position: number, key: Object): void;
}
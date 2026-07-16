import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { FrequencyBasedPolymorphicAccessNode } from '../../../../../../com/oracle/truffle/js/nodes/access/FrequencyBasedPolymorphicAccessNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertyGetNode extends FrequencyBasedPolymorphicAccessNode<PropertyGetNode> {
    static create(paramcontext: JSContext): FrequencyBasedPolymorphicAccessNode$FrequencyBasedPropertyGetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(size: number)
    // private highFrequencyKeys: PropertyGetNode[];
    executeFastGet(key: Object, target: Object, receiver: Object, equalsNode: TruffleString$EqualNode): Object;
    getHighFrequencyNodes(): PropertyGetNode[];
    isAdoptable(): boolean;
    // private readFromCaches(key: Object, target: Object, receiver: Object, equalsNode: TruffleString$EqualNode): Object;
    setHighFrequencyNode(position: number, key: Object): void;
}
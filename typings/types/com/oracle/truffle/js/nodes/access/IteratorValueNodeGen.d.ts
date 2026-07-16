import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { IteratorValueNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNodeGen$ForeignObject0Data.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorValueNodeGen extends IteratorValueNode {
    static create(paramiterResult: JavaScriptNode): JavaScriptNode;
    static create(): IteratorValueNode;
    static getUncached(): IteratorValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject0_cache: IteratorValueNodeGen$ForeignObject0Data;
    // private foreignObject1_importValueNode_: ImportValueNode;
    // private iteratorNext_getValueNode_: PropertyGetNode;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private foreignObject1Boundary(state_0: number, arg0Value: Object, importValueNode__: ImportValueNode): Object;
}
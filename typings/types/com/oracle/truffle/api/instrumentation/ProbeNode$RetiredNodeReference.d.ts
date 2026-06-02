import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProbeNode$RetiredNodeReference extends Object {
    constructor(node: Node, materializeTags: Class<Tag>[], next: ProbeNode$RetiredNodeReference)
    // private materializeTags: Class<Tag>[];
    // private next: ProbeNode$RetiredNodeReference;
    // private node: WeakReference<Node>;
    getNode(): Node;
}
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeClass } from '../../../../../com/oracle/truffle/api/nodes/NodeClass.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class NodeIterator extends Object implements Iterator<Node> {
    constructor(nodeClass: NodeClass, node: Node, fields: Object[])
    // private children: Object[];
    // private childrenIndex: number;
    // private fields: Object[];
    // private fieldsIndex: number;
    // private next: Node;
    // private node: Node;
    // private nodeClass: NodeClass;
    // private advance(): void;
    // private advanceChildren(): boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Node;
    remove(): void;
}
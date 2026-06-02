import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnsupportedSpecializationException extends RuntimeException {
    constructor(node: Node, suppliedNodes: Node[], suppliedValues: Object[])
    readonly message: string | null;
    readonly node: Node;
    readonly suppliedNodes: Node[];
    readonly suppliedValues: Object[];
    getNode(): Node;
    getSuppliedNodes(): Node[];
    getSuppliedValues(): Object[];
}
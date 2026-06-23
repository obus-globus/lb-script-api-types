import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface NodeFactory<T extends unknown> extends Object{
    createNode(arguments: Object[]): T;
    getExecutionSignature(): Class<Node>[];
    getNodeClass(): Class<T>;
    getNodeSignatures(): Class<Object>[][];
    getUncachedInstance(): T;
}
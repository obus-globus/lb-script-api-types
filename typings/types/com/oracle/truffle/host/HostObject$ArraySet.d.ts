import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$ArraySet extends Node {
    constructor()
    execute(node: Node, array: Object, index: number, value: Object): void;
}
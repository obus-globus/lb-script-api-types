import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostObject$ArrayGet extends Node {
    constructor()
    execute(node: Node, array: Object, index: number): Object;
}
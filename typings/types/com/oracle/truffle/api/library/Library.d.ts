import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Library extends Node {
    constructor()
    accepts(receiver: Object): boolean;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToLongNode extends Node {
    static create(): ToLongNode;
    constructor()
    execute(arg: Object): number;
}
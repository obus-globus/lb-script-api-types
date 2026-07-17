import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$MarkSharedNode extends Node {
    static create(): DynamicObject$MarkSharedNode;
    static getUncached(): DynamicObject$MarkSharedNode;
    constructor()
    execute(receiver: DynamicObject): boolean;
}
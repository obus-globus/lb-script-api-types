import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$GetShapeFlagsNode extends Node {
    static create(): DynamicObject$GetShapeFlagsNode;
    static getUncached(): DynamicObject$GetShapeFlagsNode;
    constructor()
    execute(receiver: DynamicObject): number;
}
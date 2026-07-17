import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$UpdateShapeNode extends Node {
    static create(): DynamicObject$UpdateShapeNode;
    static getUncached(): DynamicObject$UpdateShapeNode;
    constructor()
    execute(receiver: DynamicObject): boolean;
}
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
export abstract class DynamicObject$ResetShapeNode extends Node {
    static create(): DynamicObject$ResetShapeNode;
    static getUncached(): DynamicObject$ResetShapeNode;
    constructor()
    execute(receiver: DynamicObject, newShape: Shape): boolean;
}
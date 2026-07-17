import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
export abstract class DynamicObject$GetPropertyArrayNode extends Node {
    static create(): DynamicObject$GetPropertyArrayNode;
    static getUncached(): DynamicObject$GetPropertyArrayNode;
    constructor()
    execute(receiver: DynamicObject): Property[];
}
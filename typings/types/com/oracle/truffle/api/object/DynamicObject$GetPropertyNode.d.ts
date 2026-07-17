import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$GetPropertyNode extends Node {
    static create(): DynamicObject$GetPropertyNode;
    static getUncached(): DynamicObject$GetPropertyNode;
    constructor()
    execute(receiver: DynamicObject, key: Object): Property;
}
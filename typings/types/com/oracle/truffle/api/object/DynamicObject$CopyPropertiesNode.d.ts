import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$CopyPropertiesNode extends Node {
    static create(): DynamicObject$CopyPropertiesNode;
    static getUncached(): DynamicObject$CopyPropertiesNode;
    constructor()
    execute(from: DynamicObject, to: DynamicObject): void;
}
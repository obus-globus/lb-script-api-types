import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$ContainsKeyNode extends Node {
    static create(): DynamicObject$ContainsKeyNode;
    static getUncached(): DynamicObject$ContainsKeyNode;
    constructor()
    execute(receiver: DynamicObject, key: Object): boolean;
}
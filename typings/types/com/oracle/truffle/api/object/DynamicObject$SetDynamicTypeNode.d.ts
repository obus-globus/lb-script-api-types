import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$SetDynamicTypeNode extends Node {
    static create(): DynamicObject$SetDynamicTypeNode;
    static getUncached(): DynamicObject$SetDynamicTypeNode;
    constructor()
    execute(receiver: DynamicObject, type: Object): boolean;
}
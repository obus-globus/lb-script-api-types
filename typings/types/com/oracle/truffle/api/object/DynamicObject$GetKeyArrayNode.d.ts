import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$GetKeyArrayNode extends Node {
    static create(): DynamicObject$GetKeyArrayNode;
    static getUncached(): DynamicObject$GetKeyArrayNode;
    constructor()
    execute(receiver: DynamicObject): Object[];
}
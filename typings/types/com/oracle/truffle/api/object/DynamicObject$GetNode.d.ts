import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$GetNode extends Node {
    static create(): DynamicObject$GetNode;
    static getUncached(): DynamicObject$GetNode;
    constructor()
    execute(receiver: DynamicObject, key: Object, defaultValue: Object): Object;
    executeDouble(receiver: DynamicObject, key: Object, defaultValue: Object): number;
    executeInt(receiver: DynamicObject, key: Object, defaultValue: Object): number;
    executeLong(receiver: DynamicObject, key: Object, defaultValue: Object): number;
}
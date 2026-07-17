import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$IsSharedNode extends Node {
    static create(): DynamicObject$IsSharedNode;
    static getUncached(): DynamicObject$IsSharedNode;
    constructor()
    execute(receiver: DynamicObject): boolean;
}
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
export abstract class DynamicObject$SetShapeFlagsNode extends Node {
    static create(): DynamicObject$SetShapeFlagsNode;
    static getUncached(): DynamicObject$SetShapeFlagsNode;
    constructor()
    execute(receiver: DynamicObject, newFlags: number): boolean;
    execute(receiver: DynamicObject, andFlags: number, orFlags: number): boolean;
    executeAdd(receiver: DynamicObject, addedFlags: number): boolean;
    executeRemove(receiver: DynamicObject, removedFlags: number): boolean;
    executeRemoveAndAdd(receiver: DynamicObject, removedFlags: number, addedFlags: number): boolean;
}
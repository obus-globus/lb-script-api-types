import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$SetPropertyFlagsNode extends Node {
    static create(): DynamicObject$SetPropertyFlagsNode;
    static getUncached(): DynamicObject$SetPropertyFlagsNode;
    constructor()
    execute(receiver: DynamicObject, key: Object, propertyFlags: number): boolean;
    execute(receiver: DynamicObject, key: Object, andFlags: number, orFlags: number): boolean;
    executeAdd(receiver: DynamicObject, key: Object, addedFlags: number): boolean;
    executeRemove(receiver: DynamicObject, key: Object, removedFlags: number): boolean;
    executeRemoveAndAdd(receiver: DynamicObject, key: Object, removedFlags: number, addedFlags: number): boolean;
}
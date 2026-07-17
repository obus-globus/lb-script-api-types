import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$PutConstantNode extends Node {
    static create(): DynamicObject$PutConstantNode;
    static getUncached(): DynamicObject$PutConstantNode;
    constructor()
    execute(receiver: DynamicObject, key: Object, value: Object): void;
    executeIfAbsent(receiver: DynamicObject, key: Object, value: Object): boolean;
    executeIfPresent(receiver: DynamicObject, key: Object, value: Object): boolean;
    executeImpl(receiver: DynamicObject, key: Object, value: Object, propertyFlags: number, mode: number): boolean;
    executeWithFlags(receiver: DynamicObject, key: Object, value: Object, propertyFlags: number): void;
    executeWithFlagsIfAbsent(receiver: DynamicObject, key: Object, value: Object, propertyFlags: number): boolean;
    executeWithFlagsIfPresent(receiver: DynamicObject, key: Object, value: Object, propertyFlags: number): boolean;
}
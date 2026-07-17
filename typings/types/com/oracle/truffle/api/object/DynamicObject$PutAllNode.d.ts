import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$PutAllNode extends Node {
    static create(): DynamicObject$PutAllNode;
    static getUncached(): DynamicObject$PutAllNode;
    constructor()
    execute(receiver: DynamicObject, keys: Object[], values: Object[]): void;
    executeIfAbsent(receiver: DynamicObject, keys: Object[], values: Object[]): void;
    executeIfPresent(receiver: DynamicObject, keys: Object[], values: Object[]): void;
    executeImpl(receiver: DynamicObject, keys: Object[], values: Object[], propertyFlags: number[], mode: number): void;
    executeWithFlags(receiver: DynamicObject, keys: Object[], values: Object[], propertyFlags: number[]): void;
    executeWithFlagsIfAbsent(receiver: DynamicObject, keys: Object[], values: Object[], propertyFlags: number[]): void;
    executeWithFlagsIfPresent(receiver: DynamicObject, keys: Object[], values: Object[], propertyFlags: number[]): void;
}
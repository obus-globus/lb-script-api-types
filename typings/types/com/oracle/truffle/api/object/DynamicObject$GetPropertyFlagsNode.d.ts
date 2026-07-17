import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObject$GetPropertyFlagsNode extends Node {
    static create(): DynamicObject$GetPropertyFlagsNode;
    static getUncached(): DynamicObject$GetPropertyFlagsNode;
    constructor()
    doGeneric(receiver: DynamicObject, key: Object, defaultValue: number, isPropertyNonNull: InlinedConditionProfile): number;
    execute(receiver: DynamicObject, key: Object, defaultValue: number): number;
}
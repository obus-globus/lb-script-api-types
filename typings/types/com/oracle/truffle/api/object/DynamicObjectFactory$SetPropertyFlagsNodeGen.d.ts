import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$SetPropertyFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$SetPropertyFlagsNode.d.ts'
import type { DynamicObjectFactory$SetPropertyFlagsNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$SetPropertyFlagsNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$SetPropertyFlagsNodeGen extends DynamicObject$SetPropertyFlagsNode {
    static create(): DynamicObject$SetPropertyFlagsNode;
    static getUncached(): DynamicObject$SetPropertyFlagsNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$SetPropertyFlagsNodeGen$CachedData;
    // private state_0_: number;
    execute(receiver: DynamicObject, key: Object, propertyFlags: number): boolean;
    execute(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number, arg3Value: number): boolean;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number, arg3Value: number): boolean;
}
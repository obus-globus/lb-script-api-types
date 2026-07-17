import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$GetPropertyArrayNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyArrayNode.d.ts'
import type { DynamicObjectFactory$GetPropertyArrayNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$GetPropertyArrayNodeGen$CachedData.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
export class DynamicObjectFactory$GetPropertyArrayNodeGen extends DynamicObject$GetPropertyArrayNode {
    static create(): DynamicObject$GetPropertyArrayNode;
    static getUncached(): DynamicObject$GetPropertyArrayNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$GetPropertyArrayNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: DynamicObject): Property[];
    // private executeAndSpecialize(arg0Value: DynamicObject): Property[];
}
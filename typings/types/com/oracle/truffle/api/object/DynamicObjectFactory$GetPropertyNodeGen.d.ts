import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$GetPropertyNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyNode.d.ts'
import type { DynamicObjectFactory$GetPropertyNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$GetPropertyNodeGen$CachedData.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$GetPropertyNodeGen extends DynamicObject$GetPropertyNode {
    static create(): DynamicObject$GetPropertyNode;
    static getUncached(): DynamicObject$GetPropertyNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$GetPropertyNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: DynamicObject, arg1Value: Object): Property;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object): Property;
}
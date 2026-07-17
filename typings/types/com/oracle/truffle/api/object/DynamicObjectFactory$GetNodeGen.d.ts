import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$GetNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { DynamicObjectFactory$GetNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$GetNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$GetNodeGen extends DynamicObject$GetNode {
    static create(): DynamicObject$GetNode;
    static getUncached(): DynamicObject$GetNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$GetNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): Object;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): Object;
    executeDouble(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
    executeInt(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
    executeLong(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
}
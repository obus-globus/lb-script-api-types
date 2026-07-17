import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { DynamicObjectFactory$PutConstantNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$PutConstantNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$PutConstantNodeGen extends DynamicObject$PutConstantNode {
    static create(): DynamicObject$PutConstantNode;
    static getUncached(): DynamicObject$PutConstantNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$PutConstantNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number, arg4Value: number): boolean;
    executeImpl(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number, arg4Value: number): boolean;
    removeCached_(s0_: DynamicObjectFactory$PutConstantNodeGen$CachedData): void;
}
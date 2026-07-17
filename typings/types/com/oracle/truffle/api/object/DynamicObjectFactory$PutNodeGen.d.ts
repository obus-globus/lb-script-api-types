import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { DynamicObjectFactory$PutNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$PutNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$PutNodeGen extends DynamicObject$PutNode {
    static create(): DynamicObject$PutNode;
    static getUncached(): DynamicObject$PutNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$PutNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number, arg4Value: number): boolean;
    executeImpl(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number, arg4Value: number): boolean;
    removeCached_(s0_: DynamicObjectFactory$PutNodeGen$CachedData): void;
}
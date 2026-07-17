import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$PutAllNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutAllNode.d.ts'
import type { DynamicObjectFactory$PutAllNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$PutAllNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectFactory$PutAllNodeGen extends DynamicObject$PutAllNode {
    static create(): DynamicObject$PutAllNode;
    static getUncached(): DynamicObject$PutAllNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$PutAllNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: Object[], arg2Value: Object[], arg3Value: number[], arg4Value: number): void;
    executeImpl(arg0Value: DynamicObject, arg1Value: Object[], arg2Value: Object[], arg3Value: number[], arg4Value: number): void;
    removeCached_(s0_: DynamicObjectFactory$PutAllNodeGen$CachedData): void;
}
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$SetShapeFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$SetShapeFlagsNode.d.ts'
import type { DynamicObjectFactory$SetShapeFlagsNodeGen$CachedData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectFactory$SetShapeFlagsNodeGen$CachedData.d.ts'
export class DynamicObjectFactory$SetShapeFlagsNodeGen extends DynamicObject$SetShapeFlagsNode {
    static create(): DynamicObject$SetShapeFlagsNode;
    static getUncached(): DynamicObject$SetShapeFlagsNode;
    private constructor()
    // private cached_cache: DynamicObjectFactory$SetShapeFlagsNodeGen$CachedData;
    // private state_0_: number;
    execute(receiver: DynamicObject, newFlags: number): boolean;
    execute(arg0Value: DynamicObject, arg1Value: number, arg2Value: number): boolean;
    // private executeAndSpecialize(arg0Value: DynamicObject, arg1Value: number, arg2Value: number): boolean;
}
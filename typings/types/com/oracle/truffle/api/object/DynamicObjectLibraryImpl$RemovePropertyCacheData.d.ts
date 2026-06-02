import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObjectLibraryImpl$MutateCacheData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$MutateCacheData.d.ts'
import type { DynamicObjectLibraryImpl$RemovePlan } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$RemovePlan.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
export class DynamicObjectLibraryImpl$RemovePropertyCacheData extends DynamicObjectLibraryImpl$MutateCacheData {
    constructor(newShape: Shape, newShapeValidAssumption: Assumption, removePlan: DynamicObjectLibraryImpl$RemovePlan, next: DynamicObjectLibraryImpl$MutateCacheData)
    // private removePlan: DynamicObjectLibraryImpl$RemovePlan;
    withNext(newNext: DynamicObjectLibraryImpl$MutateCacheData): DynamicObjectLibraryImpl$MutateCacheData;
}
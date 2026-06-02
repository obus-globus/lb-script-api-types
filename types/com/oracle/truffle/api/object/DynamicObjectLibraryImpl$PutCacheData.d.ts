import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObjectLibraryImpl$MutateCacheData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$MutateCacheData.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
export class DynamicObjectLibraryImpl$PutCacheData extends DynamicObjectLibraryImpl$MutateCacheData {
    constructor(putFlags: number, propertyFlags: number, newShape: Shape, newShapeValidAssumption: Assumption, property: Property, next: DynamicObjectLibraryImpl$MutateCacheData)
    // private property: Property;
    // private propertyFlags: number;
    // private putFlags: number;
    withNext(newNext: DynamicObjectLibraryImpl$MutateCacheData): DynamicObjectLibraryImpl$MutateCacheData;
}
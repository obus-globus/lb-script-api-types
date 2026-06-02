import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObjectLibraryImpl$MutateCacheData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$MutateCacheData.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
export class DynamicObjectLibraryImpl$SetPropertyFlagsCacheData extends DynamicObjectLibraryImpl$MutateCacheData {
    constructor(newShape: Shape, newShapeValidAssumption: Assumption, property: Property, next: DynamicObjectLibraryImpl$MutateCacheData)
    // private property: Property;
    withNext(newNext: DynamicObjectLibraryImpl$MutateCacheData): DynamicObjectLibraryImpl$MutateCacheData;
}
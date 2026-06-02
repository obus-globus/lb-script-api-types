import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibraryImpl$CacheData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$CacheData.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
export class DynamicObjectLibraryImpl$MutateCacheData extends DynamicObjectLibraryImpl$CacheData<DynamicObjectLibraryImpl$MutateCacheData> {
    constructor(next: DynamicObjectLibraryImpl$MutateCacheData, newShape: Shape, newShapeValidAssumption: Assumption)
    // private newShape: Shape;
    // private newShapeValidAssumption: Assumption;
    isValid(): boolean;
    maybeUpdateShape(store: DynamicObject): void;
    withNext(newNext: DynamicObjectLibraryImpl$MutateCacheData): DynamicObjectLibraryImpl$MutateCacheData;
}
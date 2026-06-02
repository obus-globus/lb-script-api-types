import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { CoreLocations$ObjectLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$ObjectLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutImpl } from '../../../../../com/oracle/truffle/api/object/LayoutImpl.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultLayout extends LayoutImpl {
    static OPTION_PREFIX: string;
    constructor(dynamicObjectClass: Class<DynamicObject>, layoutLookup: MethodHandles$Lookup, strategy: LayoutStrategy, implicitCastFlags: number)
    // private objectFields: CoreLocations$ObjectLocation[];
    // private primitiveFields: CoreLocations$LongLocation[];
    createAllocator(): ShapeImpl$BaseAllocator;
    getLongFieldSize(): number;
    getObjectFieldCount(): number;
    getObjectFieldLocation(index: number): CoreLocations$ObjectLocation;
    getPrimitiveFieldCount(): number;
    getPrimitiveFieldLocation(index: number): CoreLocations$LongLocation;
    hasObjectExtensionArray(): boolean;
    hasPrimitiveExtensionArray(): boolean;
    newShape(objectType: Object, sharedData: Object, flags: number, singleContextAssumption: Assumption): ShapeImpl;
}
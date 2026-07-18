import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Pair } from '../../../../../org/graalvm/collections/Pair.d.ts'
export interface LayoutFactory extends Object{
    createProperty(id: Object, location: Location, flags: number): Property;
    createShape(layoutClass: Class<DynamicObject>, implicitCastFlags: number, dynamicType: Object, sharedData: Object, shapeFlags: number, constantProperties: EconomicMap<Object, Pair<Object, number>>, singleContextAssumption: Assumption, layoutLookup: MethodHandles$Lookup): Shape;
    getPriority(): number;
}
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LayoutStrategy } from '../../../../../com/oracle/truffle/api/object/LayoutStrategy.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLayoutStrategy extends LayoutStrategy {
    constructor()
    createLocationForValue(shape: ShapeImpl, value: Object, putFlags: number): Location;
    defineProperty(shape: ShapeImpl, key: Object, value: Object, flags: number): ShapeImpl;
    defineProperty(oldShape: ShapeImpl, key: Object, value: Object, propertyFlags: number, existing: Property, putFlags: number): ShapeImpl;
    defineProperty(shape: ShapeImpl, key: Object, value: Object, flags: number, putFlags: number): ShapeImpl;
    definePropertyGeneralize(oldShape: ShapeImpl, oldProperty: Property, value: Object, putFlags: number): ShapeImpl;
    ensureSameTypeOrMoreGeneral(generalProperty: Property, specificProperty: Property): void;
    getLocationOrdinal(location: Location): number;
    removeProperty(shape: ShapeImpl, property: Property): ShapeImpl;
    updateShape(object: DynamicObject): boolean;
}
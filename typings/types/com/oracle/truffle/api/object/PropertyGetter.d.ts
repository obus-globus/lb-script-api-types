import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PropertyGetter extends Object {
    constructor(expectedShape: Shape, property: Property)
    // private expectedShape: Shape;
    // private location: Location;
    // private property: Property;
    accepts(receiver: DynamicObject): boolean;
    get(receiver: DynamicObject): Object;
    getDouble(receiver: DynamicObject): number;
    getFlags(): number;
    getInt(receiver: DynamicObject): number;
    getKey(): Object;
    getLong(receiver: DynamicObject): number;
}
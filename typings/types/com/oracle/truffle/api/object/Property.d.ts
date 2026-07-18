import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Property extends Object {
    static create(paramkey: Object, paramlocation: Location, paramflags: number): Property;
    constructor()
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, condition: boolean): Object;
    getFlags(): number;
    getKey(): Object;
    getLocation(): Location;
    isHidden(): boolean;
}
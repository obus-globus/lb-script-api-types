import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Location } from '../../../../../com/oracle/truffle/api/object/Location.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Property extends Object {
    static create(paramkey: Object, paramlocation: Location, paramflags: number): Property;
    constructor(key: Object, location: Location, flags: number)
    readonly flags: number;
    readonly key: Object;
    readonly location: Location;
    copyWithFlags(newFlags: number): Property;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, condition: boolean): Object;
    getFlags(): number;
    getKey(): Object;
    getLocation(): Location;
    hashCode(): number;
    isHidden(): boolean;
    isSame(other: Property): boolean;
    relocate(newLocation: Location): Property;
    toString(): string;
}
import type { CoreLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$TypedLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { IntLocation } from '../../../../../com/oracle/truffle/api/object/IntLocation.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CoreLocations$IntLocation extends CoreLocations$TypedLocation, IntLocation, Object{
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
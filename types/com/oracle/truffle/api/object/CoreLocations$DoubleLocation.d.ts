import type { CoreLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$TypedLocation.d.ts'
import type { DoubleLocation } from '../../../../../com/oracle/truffle/api/object/DoubleLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CoreLocations$DoubleLocation extends CoreLocations$TypedLocation, DoubleLocation, Object{
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    isImplicitCastIntToDouble(): boolean;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
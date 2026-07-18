import type { DoubleLocation } from '../../../../../com/oracle/truffle/api/object/DoubleLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypedLocation.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExtLocations$DoubleLocation extends DoubleLocation, ExtLocations$TypedLocation, Object{
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    isImplicitCastIntToDouble(): boolean;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
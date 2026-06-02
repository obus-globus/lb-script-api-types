import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { ExtLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/ExtLocations$TypedLocation.d.ts'
import type { LongLocation } from '../../../../../com/oracle/truffle/api/object/LongLocation.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ExtLocations$LongLocation extends ExtLocations$TypedLocation, LongLocation, Object{
    getLong(store: DynamicObject, shape: Shape): number;
    getLong(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    isImplicitCastIntToLong(): boolean;
    setLong(store: DynamicObject, value: number, shape: Shape): void;
    setLong(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
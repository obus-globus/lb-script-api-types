import type { BooleanLocation } from '../../../../../com/oracle/truffle/api/object/BooleanLocation.d.ts'
import type { CoreLocations$TypedLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$TypedLocation.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CoreLocations$BooleanLocation extends BooleanLocation, CoreLocations$TypedLocation, Object{
    getBoolean(store: DynamicObject, shape: Shape): boolean;
    getBoolean(store: DynamicObject, guard: boolean): boolean;
    getType(): Class<boolean>;
    setBoolean(store: DynamicObject, value: boolean, shape: Shape): void;
    setBoolean(store: DynamicObject, value: boolean, guard: boolean, init: boolean): void;
}
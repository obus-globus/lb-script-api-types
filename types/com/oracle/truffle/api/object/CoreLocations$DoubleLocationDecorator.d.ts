import type { CoreLocations$DoubleLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$DoubleLocation.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { CoreLocations$PrimitiveLocationDecorator } from '../../../../../com/oracle/truffle/api/object/CoreLocations$PrimitiveLocationDecorator.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$DoubleLocationDecorator extends CoreLocations$PrimitiveLocationDecorator implements CoreLocations$DoubleLocation {
    constructor(longLocation: CoreLocations$LongLocation, allowInt: boolean)
    // private allowInt: boolean;
    canStore(value: Object): boolean;
    // private doubleValue(value: Object): number;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject, guard: boolean): Object;
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    getType(): Class<number>;
    isImplicitCastIntToDouble(): boolean;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
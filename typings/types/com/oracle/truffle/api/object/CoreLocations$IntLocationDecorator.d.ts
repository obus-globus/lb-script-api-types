import type { CoreLocations$IntLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$IntLocation.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { CoreLocations$PrimitiveLocationDecorator } from '../../../../../com/oracle/truffle/api/object/CoreLocations$PrimitiveLocationDecorator.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$IntLocationDecorator extends CoreLocations$PrimitiveLocationDecorator implements CoreLocations$IntLocation {
    constructor(longLocation: CoreLocations$LongLocation)
    canStore(value: Object): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, guard: boolean): number;
    getType(): Class<number>;
    getType(): Class<number>;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
}
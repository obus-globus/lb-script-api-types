import type { CoreLocations$BooleanLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$BooleanLocation.d.ts'
import type { CoreLocations$LongLocation } from '../../../../../com/oracle/truffle/api/object/CoreLocations$LongLocation.d.ts'
import type { CoreLocations$PrimitiveLocationDecorator } from '../../../../../com/oracle/truffle/api/object/CoreLocations$PrimitiveLocationDecorator.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CoreLocations$BooleanLocationDecorator extends CoreLocations$PrimitiveLocationDecorator implements CoreLocations$BooleanLocation {
    constructor(longLocation: CoreLocations$LongLocation)
    canStore(value: Object): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, guard: boolean): Object;
    getBoolean(store: DynamicObject, shape: Shape): boolean;
    getBoolean(store: DynamicObject, shape: Shape): boolean;
    getBoolean(store: DynamicObject, guard: boolean): boolean;
    getType(): Class<boolean>;
    getType(): Class<boolean>;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setBoolean(store: DynamicObject, value: boolean, shape: Shape): void;
    setBoolean(store: DynamicObject, value: boolean, shape: Shape): void;
    setBoolean(store: DynamicObject, value: boolean, guard: boolean, init: boolean): void;
}
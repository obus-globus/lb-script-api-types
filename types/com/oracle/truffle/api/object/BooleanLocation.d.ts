import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanLocation extends Object{
    getBoolean(store: DynamicObject, shape: Shape): boolean;
    getBoolean(store: DynamicObject, condition: boolean): boolean;
    setBoolean(store: DynamicObject, value: boolean, shape: Shape): void;
}
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleLocation extends Object{
    getDouble(store: DynamicObject, shape: Shape): number;
    getDouble(store: DynamicObject, condition: boolean): number;
    setDouble(store: DynamicObject, value: number, shape: Shape): void;
}
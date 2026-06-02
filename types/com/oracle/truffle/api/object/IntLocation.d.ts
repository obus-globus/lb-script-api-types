import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntLocation extends Object{
    getInt(store: DynamicObject, shape: Shape): number;
    getInt(store: DynamicObject, condition: boolean): number;
    setInt(store: DynamicObject, value: number, shape: Shape): void;
}
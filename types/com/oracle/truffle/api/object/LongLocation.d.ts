import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongLocation extends Object{
    getLong(store: DynamicObject, shape: Shape): number;
    getLong(store: DynamicObject, condition: boolean): number;
    setLong(store: DynamicObject, value: number, shape: Shape): void;
}
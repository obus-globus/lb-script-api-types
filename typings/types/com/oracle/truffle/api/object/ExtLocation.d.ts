import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { LocationImpl } from '../../../../../com/oracle/truffle/api/object/LocationImpl.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ExtLocation extends LocationImpl {
    constructor()
    getBoolean(store: DynamicObject, guard: boolean): boolean;
    getDouble(store: DynamicObject, guard: boolean): number;
    getInt(store: DynamicObject, guard: boolean): number;
    getLong(store: DynamicObject, guard: boolean): number;
    getOrdinal(): number;
    getWhereString(): string;
    isDoubleLocation(): boolean;
    isIntLocation(): boolean;
    isLongLocation(): boolean;
    isObjectLocation(): boolean;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
}
import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Location extends Object {
    constructor()
    canSet(value: Object): boolean;
    canStore(value: Object): boolean;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, condition: boolean): Object;
    getConstantValue(): Object;
    getDouble(store: DynamicObject, guard: boolean): number;
    getFinalAssumption(): Assumption;
    getInt(store: DynamicObject, guard: boolean): number;
    getLong(store: DynamicObject, guard: boolean): number;
    hashCode(): number;
    isAssumedFinal(): boolean;
    isConstant(): boolean;
    isDeclared(): boolean;
    isFinal(): boolean;
    isPrimitive(): boolean;
    isValue(): boolean;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
}
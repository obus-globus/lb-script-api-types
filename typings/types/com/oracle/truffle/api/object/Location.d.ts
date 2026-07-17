import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { AbstractAssumption } from '../../../../../com/oracle/truffle/api/impl/AbstractAssumption.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { FieldInfo } from '../../../../../com/oracle/truffle/api/object/FieldInfo.d.ts'
import type { Location$LocationVisitor } from '../../../../../com/oracle/truffle/api/object/Location$LocationVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Location extends Object {
    constructor()
    constructor(index: number, field: FieldInfo, finalAssumption: AbstractAssumption)
    // private field: FieldInfo;
    finalAssumption: AbstractAssumption;
    // private index: number;
    accept(locationVisitor: Location$LocationVisitor): void;
    canSet(value: Object): boolean;
    canStore(value: Object): boolean;
    canStoreConstant(value: Object): boolean;
    canStoreValue(value: Object): boolean;
    clear(store: DynamicObject): void;
    equals(obj: Object | null): boolean;
    get(store: DynamicObject): Object;
    get(store: DynamicObject, shape: Shape): Object;
    get(store: DynamicObject, condition: boolean): Object;
    getConstantValue(): Object;
    getDouble(store: DynamicObject, guard: boolean): number;
    getDoubleInternal(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    // private getDoubleUnexpected(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    getFieldOffset(): number;
    getFinalAssumption(): Assumption;
    getFinalAssumptionField(): AbstractAssumption;
    getFinalAssumptionInternal(): AbstractAssumption;
    getIndex(): number;
    getInt(store: DynamicObject, guard: boolean): number;
    getIntInternal(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    // private getIntUnexpected(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    getInternal(store: DynamicObject, expectedShape: Shape, guard: boolean): Object;
    getLong(store: DynamicObject, guard: boolean): number;
    getLongInternal(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    // private getLongUnexpected(store: DynamicObject, expectedShape: Shape, guard: boolean): number;
    getObjectArrayOffset(): number;
    getOrdinal(): number;
    getPrimitiveArrayOffset(): number;
    getType(): Class<Object>;
    hashCode(): number;
    // private initializeFinalAssumption(): AbstractAssumption;
    // private invalidateFinalAssumption(lastAssumption: AbstractAssumption): void;
    isArrayLocation(): boolean;
    isAssumedFinal(): boolean;
    isConstant(): boolean;
    isConstantLocation(): boolean;
    isDeclared(): boolean;
    isDoubleLocation(): boolean;
    isFieldLocation(): boolean;
    isFinal(): boolean;
    isImplicitCastIntToDouble(): boolean;
    isImplicitCastIntToLong(): boolean;
    isIntLocation(): boolean;
    isLongLocation(): boolean;
    isObjectLocation(): boolean;
    isPrimitive(): boolean;
    isValue(): boolean;
    maybeInvalidateFinalAssumption(): void;
    objectFieldCount(): number;
    primitiveArrayCount(): number;
    primitiveFieldCount(): number;
    set(store: DynamicObject, value: Object, shape: Shape): void;
    set(store: DynamicObject, value: Object, oldShape: Shape, newShape: Shape): void;
    set(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setDouble(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setDoubleSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setInt(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setIntSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setInternal(store: DynamicObject, value: Object, guard: boolean, oldShape: Shape, newShape: Shape): void;
    setInternal(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    setLong(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setLongSafe(store: DynamicObject, value: number, guard: boolean, init: boolean): void;
    setSafe(store: DynamicObject, value: Object, guard: boolean, init: boolean): void;
    toString(): string;
}
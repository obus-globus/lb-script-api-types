import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_v1_21_10_CoordinateEvaluationOrder extends Enum<SharedTypes_v1_21_10_CoordinateEvaluationOrder> {
    static XYZ: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static XZY: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static YXZ: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static YZX: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static ZXY: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static ZYX: SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static getByName(paramarg0: string): SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static getByName(paramarg0: string, paramarg1: SharedTypes_v1_21_10_CoordinateEvaluationOrder): SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static getByValue(paramarg0: number): SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_v1_21_10_CoordinateEvaluationOrder): SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SharedTypes_v1_21_10_CoordinateEvaluationOrder;
    static values(): SharedTypes_v1_21_10_CoordinateEvaluationOrder[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_v1_21_10_CoordinateEvaluationOrder)
    readonly value: number;
    getValue(): number;
    name(): "XYZ" | "XZY" | "YXZ" | "YZX" | "ZXY" | "ZYX";
}
import type { Striped64$Cell } from '../../../../java/util/concurrent/atomic/Striped64$Cell.d.ts'
import type { DoubleBinaryOperator } from '../../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { LongBinaryOperator } from '../../../../java/util/function/LongBinaryOperator.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export abstract class Striped64 extends Number {
    constructor()
    // private base: number;
    // private cells: Striped64$Cell[];
    // private cellsBusy: number;
    casBase(arg0: number, arg1: number): boolean;
    casCellsBusy(): boolean;
    doubleAccumulate(arg0: number, arg1: (param0: number, param1: number) => kotlin.Double, arg2: boolean, arg3: number): void;
    getAndSetBase(arg0: number): number;
    longAccumulate(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long, arg2: boolean, arg3: number): void;
}
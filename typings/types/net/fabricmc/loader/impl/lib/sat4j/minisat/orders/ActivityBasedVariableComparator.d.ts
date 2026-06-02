import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VariableComparator } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/orders/VariableComparator.d.ts'
export class ActivityBasedVariableComparator extends Object implements VariableComparator {
    constructor(arg0: number[])
    // private activity: number[];
    preferredTo(arg0: number, arg1: number): boolean;
    toString(): string;
}
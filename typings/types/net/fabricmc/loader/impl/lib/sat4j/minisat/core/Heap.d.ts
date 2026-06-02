import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VariableComparator } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/orders/VariableComparator.d.ts'
import type { IVecInt } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
export class Heap extends Object implements Serializable {
    constructor(arg0: VariableComparator)
    // private comparator: VariableComparator;
    // private heap: IVecInt;
    // private indices: IVecInt;
    empty(): boolean;
    get(arg0: number): number;
    getmin(): number;
    inHeap(arg0: number): boolean;
    increase(arg0: number): void;
    insert(arg0: number): void;
    ok(arg0: number): boolean;
    percolateDown(arg0: number): void;
    percolateUp(arg0: number): void;
    setBounds(arg0: number): void;
}
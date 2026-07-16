import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { IVecInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVecInt.d.ts'
import type { IteratorInt } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IteratorInt.d.ts'
export class EmptyVecInt extends Object implements IVecInt {
    constructor()
    clear(): void;
    clone(): IVecInt;
    contains(arg0: number): boolean;
    copyTo(arg0: number[]): void;
    copyTo(arg0: IVecInt): void;
    delete(arg0: number): number;
    ensure(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    growTo(arg0: number, arg1: number): void;
    hashCode(): number;
    indexOf(arg0: number): number;
    isEmpty(): boolean;
    iterator(): IteratorInt;
    last(): number;
    moveTo(arg0: number, arg1: number): void;
    moveTo(arg0: number[]): void;
    pop(): IVecInt;
    push(arg0: number): IVecInt;
    remove(arg0: number): void;
    set(arg0: number, arg1: number): void;
    shrink(arg0: number): void;
    size(): number;
    sort(): void;
    sort(arg0: (param0: number, param1: number) => number): void;
    sortUnique(): void;
    toArray(): number[];
    toString(): string;
    unsafeGet(arg0: number): number;
    unsafePush(arg0: number): void;
}
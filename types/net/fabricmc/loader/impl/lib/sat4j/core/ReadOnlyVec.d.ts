import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { IVec } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/IVec.d.ts'
export class ReadOnlyVec<T extends Object | number | string | boolean> extends Object implements IVec<T> {
    constructor(arg0: IVec<T>)
    // private vec: IVec<T>;
    clear(): void;
    clone(): IVec<T>;
    copyTo(arg0: E[]): void;
    copyTo(arg0: IVec<T>): void;
    delete(arg0: number): T;
    ensure(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): T;
    hashCode(): number;
    isEmpty(): boolean;
    iterator(): Iterator<T>;
    last(): T;
    moveTo(arg0: number, arg1: number): void;
    moveTo(arg0: IVec<T>): void;
    pop(): void;
    push(arg0: T): IVec<T>;
    remove(arg0: T): void;
    removeFromLast(arg0: T): void;
    set(arg0: number, arg1: T): void;
    shrinkTo(arg0: number): void;
    size(): number;
    sort(arg0: (param0: T) => kotlin.Boolean): void;
    toString(): string;
}
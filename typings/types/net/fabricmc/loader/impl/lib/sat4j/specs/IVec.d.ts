import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export interface IVec<T extends unknown> extends Serializable, Object, Cloneable {
    clear(): void;
    protected clone(): Object;
    copyTo<E extends unknown>(arg0: E[]): void;
    copyTo(arg0: IVec<T>): void;
    delete(arg0: number): T;
    ensure(arg0: number): void;
    get(arg0: number): T;
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
    sort(arg0: (param0: T, param1: T) => number): void;
}
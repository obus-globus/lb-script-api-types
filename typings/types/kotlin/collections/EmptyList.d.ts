import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { RandomAccess } from '../../java/util/RandomAccess.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { ListIterator } from '../../java/util/ListIterator.d.ts'
export class EmptyList extends Object implements Serializable, RandomAccess {
    static INSTANCE: EmptyList;
    // private serialVersionUID: number;
    readonly size: number;
    contains(element: void): boolean;
    containsAll(elements: void[]): boolean;
    equals(other: Object | null): boolean;
    get(index: number): void;
    hashCode(): number;
    indexOf(element: void): number;
    isEmpty(): boolean;
    iterator(): Iterator<void>;
    lastIndexOf(element: void): number;
    listIterator(): ListIterator<void>;
    listIterator(index: number): ListIterator<void>;
    // private readResolve(): Object;
    subList(fromIndex: number, toIndex: number): void[];
    toString(): string;
}
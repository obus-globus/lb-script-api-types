import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class EmptySet extends Object implements Serializable {
    static INSTANCE: EmptySet;
    // private serialVersionUID: number;
    readonly size: number;
    getSize(): number;
    contains(element: void): boolean;
    containsAll(elements: void[]): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    iterator(): Iterator<void>;
    // private readResolve(): Object;
    toString(): string;
}
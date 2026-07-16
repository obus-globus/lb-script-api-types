import type { ElementOrder$Type } from '../../../../com/google/common/graph/ElementOrder$Type.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ElementOrder<T extends unknown> extends Object {
    static insertion<S extends unknown>(): ElementOrder<S>;
    static natural<S extends Comparable<Object>>(): ElementOrder<S>;
    static sorted<S extends unknown>(paramcomparator: (param0: S, param1: S) => number): ElementOrder<S>;
    static stable<S extends unknown>(): ElementOrder<S>;
    static unordered<S extends unknown>(): ElementOrder<S>;
    private constructor(type: ElementOrder$Type, comparator: (param0: T, param1: T) => number)
    // private comparator: (param0: T, param1: T) => number;
    // private type: ElementOrder$Type;
    cast<T1 extends T>(): ElementOrder<T1>;
    comparator(): (param0: T, param1: T) => number;
    createMap<K extends T, V extends unknown>(expectedSize: number): Map<K, V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): ElementOrder$Type;
}
import type { ElementOrder$Type } from '../../../../com/google/common/graph/ElementOrder$Type.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ElementOrder<T extends unknown> extends Object {
    static insertion(): ElementOrder<Object>;
    static natural(): ElementOrder<Object>;
    static sorted(paramcomparator: (param0: Object | null, param1: Object | null) => number): ElementOrder<Object>;
    static stable(): ElementOrder<Object>;
    static unordered(): ElementOrder<Object>;
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
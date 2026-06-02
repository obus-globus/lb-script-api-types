import type { ElementOrder$Type } from '../../../../com/google/common/graph/ElementOrder$Type.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ElementOrder<T extends Object | number | string | boolean> extends Object {
    static insertion(): ElementOrder<Object>;
    static natural(): ElementOrder<Object>;
    static sorted(paramcomparator: (param0: Object | null) => kotlin.Boolean): ElementOrder<Object>;
    static stable(): ElementOrder<Object>;
    static unordered(): ElementOrder<Object>;
    private constructor(type: ElementOrder$Type, comparator: (param0: T) => kotlin.Boolean)
    // private comparator: (param0: T) => kotlin.Boolean;
    // private type: ElementOrder$Type;
    cast(): ElementOrder<T1>;
    comparator(): (param0: T) => kotlin.Boolean;
    createMap(expectedSize: number): Map<K, V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): ElementOrder$Type;
}
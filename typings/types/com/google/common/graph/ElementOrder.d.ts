import type { ElementOrder$Type } from '../../../../com/google/common/graph/ElementOrder$Type.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ElementOrder<T extends Object | number | string | boolean> extends Object {
    static insertion(): ElementOrder<Object>;
    static natural(): ElementOrder<Object>;
    static sorted(paramcomparator: (param0: Object) => boolean): ElementOrder<Object>;
    static stable(): ElementOrder<Object>;
    static unordered(): ElementOrder<Object>;
    private constructor(type: ElementOrder$Type, comparator: (param0: Object) => boolean)
    // private comparator: (param0: Object) => boolean;
    // private type: ElementOrder$Type;
    cast<T1 extends T>(): ElementOrder<T1>;
    comparator(): (param0: Object) => boolean;
    createMap<K extends T, V extends Object | number | string | boolean>(expectedSize: number): Map<K, V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): ElementOrder$Type;
}
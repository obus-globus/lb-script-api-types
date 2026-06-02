import type { Object } from '../../../java/lang/Object.d.ts'
export class Pair<L extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    static create(paramleft: Object | null, paramright: Object | null): Pair<Object, Object>;
    static createLeft(paramleft: Object | null): Pair<Object, Object>;
    static createRight(paramright: Object | null): Pair<Object, Object>;
    static empty(): Pair<Object, Object>;
    private constructor(left: L, right: R)
    readonly left: L;
    readonly right: R;
    equals(obj: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    toString(): string;
}
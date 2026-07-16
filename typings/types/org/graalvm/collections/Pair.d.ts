import type { Object } from '../../../java/lang/Object.d.ts'
export class Pair<L extends unknown, R extends unknown> extends Object {
    static create<L extends unknown, R extends unknown>(paramleft: L, paramright: R): Pair<L, R>;
    static createLeft<L extends unknown, R extends unknown>(paramleft: L): Pair<L, R>;
    static createRight<L extends unknown, R extends unknown>(paramright: R): Pair<L, R>;
    static empty<L extends unknown, R extends unknown>(): Pair<L, R>;
    private constructor(left: L, right: R)
    readonly left: L;
    readonly right: R;
    equals(obj: Object | null): boolean;
    getLeft(): L;
    getRight(): R;
    hashCode(): number;
    toString(): string;
}
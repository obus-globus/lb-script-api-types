import type { View } from '../../../com/mojang/datafixers/View.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RewriteResult<A extends unknown, B extends unknown> extends Record {
    static create<A extends unknown, B extends unknown>(paramarg0: View<A, B>, paramarg1: BitSet): RewriteResult<A, B>;
    static nop<A extends unknown>(paramarg0: Type<A>): RewriteResult<A, A>;
    constructor(view: View<A, B>, recData: BitSet)
    // private recData: BitSet;
    // private view: View<A, B>;
    compose<C extends unknown>(arg0: RewriteResult<C, A>): RewriteResult<C, B>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    recData(): BitSet;
    toString(): string;
    view(): View<A, B>;
}
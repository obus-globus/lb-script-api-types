import type { View } from '../../../com/mojang/datafixers/View.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RewriteResult<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Record {
    static create(paramarg0: View<Object, Object>, paramarg1: BitSet): RewriteResult<Object, Object>;
    static nop(paramarg0: Type<Object>): RewriteResult<Object, Object>;
    constructor(view: View<A, B>, recData: BitSet)
    // private recData: BitSet;
    // private view: View<A, B>;
    compose(arg0: RewriteResult<C, A>): RewriteResult<C, B>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    recData(): BitSet;
    toString(): string;
    view(): View<A, B>;
}
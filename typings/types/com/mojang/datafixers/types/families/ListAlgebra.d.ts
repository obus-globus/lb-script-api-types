import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Algebra } from '../../../../../com/mojang/datafixers/types/families/Algebra.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListAlgebra extends Object implements Algebra {
    constructor(arg0: string, arg1: RewriteResult<Object, Object>[])
    // private hashCode: number;
    // private name: string;
    // private views: RewriteResult<Object, Object>[];
    apply(arg0: number): RewriteResult<Object, Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    toString(arg0: number): string;
}
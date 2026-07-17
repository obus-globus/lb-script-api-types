import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypeRewriteRule$IfSame<B extends unknown> extends Object implements TypeRewriteRule {
    constructor(arg0: Type<B>, arg1: RewriteResult<B, Object>)
    // private hashCode: number;
    // private targetType: Type<B>;
    // private value: RewriteResult<B, Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rewrite<A extends unknown>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
}
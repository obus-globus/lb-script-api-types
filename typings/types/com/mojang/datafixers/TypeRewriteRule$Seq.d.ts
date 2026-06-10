import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { PointFreeRule } from '../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypeRewriteRule$Seq extends Object implements TypeRewriteRule {
    static all(paramarg0: TypeRewriteRule, paramarg1: boolean, paramarg2: boolean): TypeRewriteRule;
    static checkOnce(paramarg0: TypeRewriteRule, paramarg1: (param0: Type<Object>) => void): TypeRewriteRule;
    static everywhere(paramarg0: TypeRewriteRule, paramarg1: PointFreeRule, paramarg2: boolean, paramarg3: boolean): TypeRewriteRule;
    static ifSame(paramarg0: Type<Object>, paramarg1: RewriteResult<Object, Object>): TypeRewriteRule;
    static nop(): TypeRewriteRule;
    static once(paramarg0: TypeRewriteRule): TypeRewriteRule;
    static one(paramarg0: TypeRewriteRule): TypeRewriteRule;
    static orElse(paramarg0: TypeRewriteRule, paramarg1: TypeRewriteRule): TypeRewriteRule;
    static orElse(paramarg0: TypeRewriteRule, paramarg1: () => TypeRewriteRule): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule, paramarg1: TypeRewriteRule): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule, paramarg1: (Object | null)[]): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule[]): TypeRewriteRule;
    constructor(arg0: TypeRewriteRule[])
    // private hashCode: number;
    // private rules: TypeRewriteRule[];
    cap1<A extends Object | number | string | boolean, B extends Object | number | string | boolean>(arg0: TypeRewriteRule, arg1: RewriteResult<A, B>): Optional<RewriteResult<A, Object>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rewrite<A extends Object | number | string | boolean>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
}
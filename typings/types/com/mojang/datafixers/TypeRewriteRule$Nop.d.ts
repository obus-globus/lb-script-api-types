import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { PointFreeRule } from '../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TypeRewriteRule$Nop extends Enum<TypeRewriteRule$Nop> implements TypeRewriteRule, Supplier<TypeRewriteRule> {
    static INSTANCE: TypeRewriteRule$Nop;
    static all(paramarg0: TypeRewriteRule, paramarg1: boolean, paramarg2: boolean): TypeRewriteRule;
    static checkOnce(paramarg0: TypeRewriteRule, paramarg1: (param0: Type<Object>) => void): TypeRewriteRule;
    static everywhere(paramarg0: TypeRewriteRule, paramarg1: PointFreeRule, paramarg2: boolean, paramarg3: boolean): TypeRewriteRule;
    static ifSame<B extends unknown>(paramarg0: Type<B>, paramarg1: RewriteResult<B, Object>): TypeRewriteRule;
    static nop(): TypeRewriteRule;
    static once(paramarg0: TypeRewriteRule): TypeRewriteRule;
    static one(paramarg0: TypeRewriteRule): TypeRewriteRule;
    static orElse(paramarg0: TypeRewriteRule, paramarg1: TypeRewriteRule): TypeRewriteRule;
    static orElse(paramarg0: TypeRewriteRule, paramarg1: () => TypeRewriteRule): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule, paramarg1: TypeRewriteRule): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule, ...paramarg1: TypeRewriteRule[]): TypeRewriteRule;
    static seq(paramarg0: TypeRewriteRule[]): TypeRewriteRule;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeRewriteRule$Nop;
    static values(): TypeRewriteRule$Nop[];
    private constructor()
    get(): TypeRewriteRule;
    rewrite<A extends unknown>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
    name(): "INSTANCE";
}
import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TypeRewriteRule$Nop extends Enum<TypeRewriteRule$Nop> implements TypeRewriteRule, Supplier<TypeRewriteRule> {
    static INSTANCE: TypeRewriteRule$Nop;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeRewriteRule$Nop;
    static values(): TypeRewriteRule$Nop[];
    private constructor()
    get(): TypeRewriteRule;
    rewrite<A extends unknown>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
    name(): "INSTANCE";
}
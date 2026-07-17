import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { TypeRewriteRule } from '../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypeRewriteRule$CheckOnce extends Record implements TypeRewriteRule {
    constructor(rule: TypeRewriteRule, onFail: (param0: Type<Object>) => void)
    // private onFail: (param0: Type<Object>) => void;
    // private rule: TypeRewriteRule;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onFail(): (param0: Type<Object>) => void;
    rewrite<A extends unknown>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
    rule(): TypeRewriteRule;
    toString(): string;
}
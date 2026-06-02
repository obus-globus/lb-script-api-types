import type { TypeRewriteRule } from '../../../../com/mojang/datafixers/TypeRewriteRule.d.ts'
import type { PointFreeRule } from '../../../../com/mojang/datafixers/functions/PointFreeRule.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Type$RewriteCacheKey extends Record {
    private constructor(type: Type<Object>, rule: TypeRewriteRule, optimizationRule: PointFreeRule)
    // private optimizationRule: PointFreeRule;
    // private rule: TypeRewriteRule;
    // private type: Type<Object>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    optimizationRule(): PointFreeRule;
    rule(): TypeRewriteRule;
    toString(): string;
    type(): Type<Object>;
}
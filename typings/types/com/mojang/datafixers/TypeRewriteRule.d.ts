import type { RewriteResult } from '../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeRewriteRule extends Object{
    rewrite<A extends unknown>(arg0: Type<A>): Optional<RewriteResult<A, Object>>;
}
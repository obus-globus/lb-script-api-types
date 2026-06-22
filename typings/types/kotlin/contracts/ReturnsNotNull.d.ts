import type { Object } from '../../java/lang/Object.d.ts'
import type { ConditionalEffect } from '../../kotlin/contracts/ConditionalEffect.d.ts'
import type { SimpleEffect } from '../../kotlin/contracts/SimpleEffect.d.ts'
export interface ReturnsNotNull extends Object, SimpleEffect{
    implies(booleanExpression: boolean): ConditionalEffect;
}
import type { Object } from '../../java/lang/Object.d.ts'
import type { ConditionalEffect } from '../../kotlin/contracts/ConditionalEffect.d.ts'
import type { SimpleEffect } from '../../kotlin/contracts/SimpleEffect.d.ts'
export interface Returns extends Object, SimpleEffect{
    implies(booleanExpression: boolean): ConditionalEffect;
}
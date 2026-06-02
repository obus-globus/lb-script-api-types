import type { Object } from '../../java/lang/Object.d.ts'
import type { ConditionalEffect } from '../../kotlin/contracts/ConditionalEffect.d.ts'
import type { Effect } from '../../kotlin/contracts/Effect.d.ts'
export interface SimpleEffect extends Object, Effect{
    implies(booleanExpression: boolean): ConditionalEffect;
}
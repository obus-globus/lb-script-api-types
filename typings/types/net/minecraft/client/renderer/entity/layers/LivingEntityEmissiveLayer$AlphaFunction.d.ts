import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export interface LivingEntityEmissiveLayer$AlphaFunction<S extends LivingEntityRenderState> extends Object{
    apply(state: S, ageInTicks: number): number;
}
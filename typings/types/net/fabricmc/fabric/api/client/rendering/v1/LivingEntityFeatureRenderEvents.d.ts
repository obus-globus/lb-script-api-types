import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntityFeatureRenderEvents$AllowCapeRender } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRenderEvents$AllowCapeRender.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { AvatarRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
export class LivingEntityFeatureRenderEvents extends Object {
    static ALLOW_CAPE_RENDER: Event<(param0: AvatarRenderState) => kotlin.Boolean>;
    private constructor()
}
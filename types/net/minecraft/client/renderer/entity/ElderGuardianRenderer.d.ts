import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { GuardianRenderer } from '../../../../../net/minecraft/client/renderer/entity/GuardianRenderer.d.ts'
import type { GuardianRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/GuardianRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ElderGuardianRenderer extends GuardianRenderer {
    static GUARDIAN_ELDER_LOCATION: Identifier;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    getTextureLocation(state: GuardianRenderState): Identifier;
}
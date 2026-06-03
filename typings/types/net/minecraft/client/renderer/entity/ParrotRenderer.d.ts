import type { ParrotModel } from '../../../../../net/minecraft/client/model/animal/parrot/ParrotModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ParrotRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ParrotRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Parrot } from '../../../../../net/minecraft/world/entity/animal/parrot/Parrot.d.ts'
import type { Parrot$Variant } from '../../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
export class ParrotRenderer extends MobRenderer<Parrot, ParrotRenderState, ParrotModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    static getVariantTexture(paramvariant: Parrot$Variant): Identifier;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ParrotRenderState;
    createRenderState(entity: Parrot, partialTicks: number): ParrotRenderState;
    extractRenderState(entity: Parrot, state: ParrotRenderState, partialTicks: number): void;
    getTextureLocation(state: ParrotRenderState): Identifier;
}
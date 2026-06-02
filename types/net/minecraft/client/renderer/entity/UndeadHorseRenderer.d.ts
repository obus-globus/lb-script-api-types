import type { AbstractEquineModel } from '../../../../../net/minecraft/client/model/animal/equine/AbstractEquineModel.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { AbstractHorseRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractHorseRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { UndeadHorseRenderer$Type } from '../../../../../net/minecraft/client/renderer/entity/UndeadHorseRenderer$Type.d.ts'
import type { EquineRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EquineRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractHorse } from '../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
export class UndeadHorseRenderer extends AbstractHorseRenderer<AbstractHorse, EquineRenderState, AbstractEquineModel<EquineRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, saddleLayer: EquipmentClientInfo$LayerType, saddleModel: ModelLayerLocation, adult: UndeadHorseRenderer$Type, baby: UndeadHorseRenderer$Type)
    // private adultTexture: Identifier;
    // private babyTexture: Identifier;
    createRenderState(): EquineRenderState;
    getTextureLocation(state: EquineRenderState): Identifier;
}
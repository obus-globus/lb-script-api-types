import type { DonkeyModel } from '../../../../../net/minecraft/client/model/animal/equine/DonkeyModel.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { AbstractHorseRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractHorseRenderer.d.ts'
import type { DonkeyRenderer$Type } from '../../../../../net/minecraft/client/renderer/entity/DonkeyRenderer$Type.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { DonkeyRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/DonkeyRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractChestedHorse } from '../../../../../net/minecraft/world/entity/animal/equine/AbstractChestedHorse.d.ts'
export class DonkeyRenderer<T extends AbstractChestedHorse> extends AbstractHorseRenderer<T, DonkeyRenderState, DonkeyModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, saddleLayer: EquipmentClientInfo$LayerType, saddleModel: ModelLayerLocation, adult: DonkeyRenderer$Type, baby: DonkeyRenderer$Type)
    // private adultTexture: Identifier;
    // private babyTexture: Identifier;
    createRenderState(): DonkeyRenderState;
    extractRenderState(entity: T, state: DonkeyRenderState, partialTicks: number): void;
    getTextureLocation(state: DonkeyRenderState): Identifier;
}
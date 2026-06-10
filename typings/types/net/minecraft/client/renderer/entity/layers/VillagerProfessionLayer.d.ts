import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { VillagerLikeModel } from '../../../../../../net/minecraft/client/model/VillagerLikeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { VillagerDataHolderRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/VillagerDataHolderRenderState.d.ts'
import type { VillagerMetadataSection$Hat } from '../../../../../../net/minecraft/client/resources/metadata/animation/VillagerMetadataSection$Hat.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { VillagerProfession } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { VillagerType } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
export class VillagerProfessionLayer<S extends LivingEntityRenderState & VillagerDataHolderRenderState, M extends EntityModel<S> & VillagerLikeModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>, resourceManager: ResourceManager, path: string, noHatModel: M, noHatBabyModel: M)
    // private noHatBabyModel: M;
    // private noHatModel: M;
    // private path: string;
    // private professionHatCache: Map<ResourceKey<VillagerProfession>, VillagerMetadataSection$Hat>;
    // private resourceManager: ResourceManager;
    // private typeHatCache: Map<ResourceKey<VillagerType>, VillagerMetadataSection$Hat>;
    getHatData<K extends Object | number | string | boolean>(cache: Map<ResourceKey<K>, VillagerMetadataSection$Hat>, name: string, holder: Holder<K>): VillagerMetadataSection$Hat;
    // private getIdentifier(type: string, holder: Holder<Object>): Identifier;
    // private getIdentifier(type: string, key: Identifier): Identifier;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}